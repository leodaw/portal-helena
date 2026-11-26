#!/usr/bin/env python3
"""Publicação bloqueada se integridade curricular ou retrocompatibilidade falhar.
ATENÇÃO: verifica rastreabilidade estrutural, não substitui uma revisão pedagógica humana.
"""
import json, re, zipfile, sys, pathlib, collections, subprocess, hashlib
root=pathlib.Path(__file__).resolve().parents[1]
new=json.loads((root/'pd/content.js').read_text().removeprefix('const PD_CONTENT=').strip().rstrip(';'))
man=json.loads((root/'pd/coverage.json').read_text())
oldzip=pathlib.Path('/mnt/data/portal_helena_pd_rc9.zip')
fail=[];pass_count=0
def check(ok,msg):
 global pass_count
 if not ok:fail.append(msg)
 else:pass_count+=1
check(set(new)=={'en','por','geo','cie','his','mat'},'Todas as seis matérias presentes')
check(len(man['incidents'])==2,'Os dois incidentes pedagógicos registrados')
ids=set();counts=collections.Counter()
for t in man['topics']:
 id=t['subject'];idx=t['module'];qid=t['question_id'];tid=t['id']
 check(tid not in ids,'ID repetido '+tid);ids.add(tid);counts[id]+=1
 check(bool(t.get('source')) and ('pdf' in t['source']),'Falta referência '+tid)
 check(idx<len(new[id]['modules']),'Módulo inválido '+tid)
 if idx<len(new[id]['modules']):
  sections=new[id]['modules'][idx]['lesson']['sections']
  check(any(h==t['lesson_title'] and len(body)>=90 for h,body in sections),'Explicação ausente '+tid)
 qs=[q for q in new[id]['questions'] if q.get('coverageId')==qid]
 check(len(qs)==1,'Questão de cobertura ausente/duplicada '+tid)
 if len(qs)==1:
  q=qs[0]
  check(q['module']==idx and len(q['prompt'])>=35 and len(q['model'])>=15,'Pergunta ou gabarito insuficiente '+tid)
  check(q.get('sourceRef')==t['source'],'Divergência de fonte '+tid)
for id,n in [('his',20),('mat',20),('en',20),('cie',10),('por',10),('geo',10)]:
 check(counts[id]==n,'Quantidade de subtemas '+id)
 check(len(new[id]['questions'])==20+n,'Quantidade total de questões '+id)
 check(len(new[id]['questions'])%10==0,'Lote de dez '+id)
 check(all('prompt' in q and 'model' in q and 0<=q['module']<len(new[id]['modules']) for q in new[id]['questions']),'Integridade de questões '+id)
 check(all(len(m['lesson']['sections'])>=4 for m in new[id]['modules']),'Aulas com seções '+id)
# RC9 integrity fingerprints included in the package; no external zip required.
fingerprint=json.loads((root/'pd/original_rc9_hashes.json').read_text())
for id in new:
 old=fingerprint[id]
 for typ,length_key,hash_key in [('modules','originalModules','modulesDigest'),('questions','originalQuestions','questionsDigest')]:
  segment=new[id][typ][:old[length_key]]
  digest=hashlib.sha256(json.dumps(segment,sort_keys=True,ensure_ascii=False).encode()).hexdigest()
  check(digest==old[hash_key],f'Conteúdo RC9 alterado: {id}.{typ}')
pdjs=(root/'pd/pd.js').read_text()
check("const PDS_KEY='helena_pd_2026_v1'" in pdjs,'Chave de armazenamento mudou')
check("const QUESTION_SET='pd-rc6-prepara-120'" in pdjs,'Alterou versão de questões e pode zerar respostas')
check('function reviewSelector()' in pdjs and 'reviewCount(course)' in pdjs,'Seletor de revisões não é dinâmico')
check('pd.challenges' in pdjs and 'pd.drawings' in pdjs,'Dados de desenho ou missões não preservados')
check('quizArchive' in pdjs,'Histórico de respostas removido')
for f in ['pd/content.js','pd/pd.js','pd/dna.js','data/mentores.js']:
 result=subprocess.run(['node','--check',str(root/f)],capture_output=True,text=True)
 check(result.returncode==0,'Sintaxe '+f+': '+result.stderr[:150])
print('VERIFICAÇÕES PASSARAM:',pass_count,'| FALHAS:',len(fail))
for f in fail:print('FALHA:',f)
sys.exit(bool(fail))
