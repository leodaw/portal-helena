#!/usr/bin/env python3
"""RC11: qualidade estrutural, regressão do conteúdo e banco local."""
import json,re,sys,zipfile,subprocess
from pathlib import Path
base=Path(__file__).resolve().parents[1]
checks=0
def check(expr,msg):
 global checks
 checks+=1
 if not expr:raise AssertionError(msg)
content=(base/'pd/content.js').read_text()
bank=json.loads((base/'pd/correction-bank.json').read_text())
coverage=json.loads((base/'pd/coverage.json').read_text())
app=(base/'pd/pd.js').read_text()
html=(base/'pd/index.html').read_text()
css=(base/'pd/rc5.css').read_text()
check("const PDS_KEY='helena_pd_2026_v1'" in app,'Chave de armazenamento mudou')
check("const QUESTION_SET='pd-rc6-prepara-120'" in app,'ID de questões mudou')
check('pd.answers={};pd.submitted={};pd.scores={}' in app,'Fluxo legado mudou (revisar migração com cuidado)')
check('Plano atualizado' not in app,'Alerta removido voltou')
check('Reforço de cobertura' not in app,'Bloco removido voltou')
check("isToday(e.day)?'today':''" in app and "isToday(e.day)?'pd-current-day':''" in app,'Destaque dinâmico ausente')
check('position:static!important' in css,'Navegação não é scrollável junto ao documento')
check('RC11 · 25/11/2026' in html,'Identificação incorreta')
check('confidenceField' in app and 'correctionCard' in app and 'setHumanReview' in app,'Falta experiência de correção')
check('correction-bank.js' in html and 'correction.js' in html,'Corretor não carrega')
check(len(coverage['topics'])==90,'Matriz RC10 de reforço não preservada')
check(set(bank['subjects'])=={'en','por','geo','cie','his','mat'},'Disciplinas incompletas')
for sub,items in bank['subjects'].items():
 check(len(items)=={'en':40,'por':30,'geo':30,'cie':30,'his':40,'mat':40}[sub],f'Contagem {sub}')
 for i,q in enumerate(items):
  check(q['id']==f'{sub}:q{i+1}',f'ID incorreto: {sub} {i}')
  check(bool(q['expected'].strip()),f'Sem gabarito {sub}:{i}')
  check(bool(q['source'].strip(' ·')),f'Sem referência {sub}:{i}')
  check(bool(q['prompt'].strip()),f'Sem enunciado {sub}:{i}')
for f in ('pd/content.js','pd/pd.js','pd/correction-bank.js','pd/correction.js','pd/dna.js'):
 p=base/f
 check(p.exists(),f'Falta {p}')
 r=subprocess.run(['node','--check',str(p)],capture_output=True,text=True)
 check(r.returncode==0,f'JS {f}: {r.stderr}')
print(f'OK: {checks} verificações estruturais da RC11')
