/* RC11: avaliador local sem API, baseado nos gabaritos e referência de origem.
   Não atribui nota, não reprova respostas livres por ausência de palavras-chave. */
function cleanText(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[‐‑–—]/g,'-').replace(/[^a-z0-9/.,%+-]+/g,' ').replace(/\s+/g,' ').trim()}
const CORR_STOP=new Set('a o os as um uma uns umas de do da dos das e ou em no na nos nas que para por com como qual quais seu sua seus suas seus esta este sao ser foi tem ha houve onde quando quem era eram nao sim mais menos muito muito igual mesmos mesmas mesma mesmo entre porque resposta esperada conforme conceito estudado esta exemplo explique mostre conta indique identifique mostre cheguei a resposta esperada esperado correta'.split(' '));
function modelConcepts(s){return [...new Set(cleanText(s).split(/[;,.:!?()]+/).flatMap(chunk=>chunk.split(/\s+/)).filter(x=>x.length>=4&&!CORR_STOP.has(x)&&!/^[0-9]+$/.test(x)))].slice(0,13)}
function mathExpr(s){return (String(s||'').match(/-?\d+(?:[,.]\d+)?(?:\s*\/\s*\d+)?/g)||[]).map(x=>x.replace(/\s/g,'').replace(',','.'))}
function localCorrection(answer,model,question={}){
 const raw=String(answer||'').trim();if(!raw)return {status:'empty',found:[],missing:[],method:'empty'};
 const norm=cleanText(raw),gold=cleanText(model||'');if(!gold)return {status:'review',found:[],missing:[],method:'no-model'};
 if(norm===gold||norm.length>=13&&gold.includes(norm)&&norm.length>=Math.min(40,gold.length*.75))return {status:'ok',found:['Correspondência com a referência'],missing:[],method:'exact'};

 // Rubrica específica para a atividade de Português sobre homófonos (ficha 18).
 if(question.rubric?.id==='por:q21'){
   const pair=norm.includes('conserto')&&norm.includes('concerto');
   const meaning=/(mesmo som|som igual|sons iguais|pronuncia igual|mesma pronuncia|homofon)/.test(norm);
   if(pair&&meaning)return {status:'ok',found:['Conserto / concerto','Mesmo som, grafias e sentidos diferentes'],missing:[],method:'specific'};
   if(pair||meaning)return {status:'partial',found:[pair?'Par de palavras':'Conceito de homofonia'],missing:[pair?'Explique por que têm o mesmo som':'Identifique conserto e concerto'],method:'specific'};
   return {status:'review',found:[],missing:[],method:'specific-inconclusive'};
 }
 // Resposta matemática: apenas reconhece resultados explícitos; não presume que a conta foi demonstrada.
 const numericPrompt=/calcule|resultado|quanto|fra[cç][aã]o|decimal|converta|transforme|quantos|qual valor|compare|total|troco|subtrai|som[aá]|divis[aã]o|multipli|valor posicional/i.test(question.prompt||'');
 const expectedNumbers=mathExpr(model);const observedNumbers=mathExpr(raw);
 if(numericPrompt&&expectedNumbers.length&&observedNumbers.length){
  let match=expectedNumbers.filter(n=>observedNumbers.includes(n));let last=expectedNumbers.at(-1);
  if(last&&observedNumbers.includes(last)&&expectedNumbers.length<5){return {status:expectedNumbers.length>1&&match.length===1?'partial':'ok',found:['Resultado numérico '+last],missing:[],method:'numeric',note:'O cálculo e a justificativa ainda precisam ser conferidos.'}}
  if(match.length)return {status:'partial',found:match.map(n=>'Valor '+n),missing:[],method:'numeric-partial'};
  return {status:'review',found:[],missing:[],method:'numeric-inconclusive'};
 }
 const tokens=modelConcepts(model);const words=new Set(norm.split(/\s+/));let found=[],missing=[];
 for(const token of tokens){
  const group=CORRECTION_BANK.synonyms[token]||[];
  if(words.has(token)||group.some(x=>norm.includes(cleanText(x))))found.push(token);else missing.push(token)
 }
 // Nunca chama um texto semanticamente diferente de "incorreto". Busca concordância substancial.
 if(tokens.length>=2&&found.length>=Math.max(2,Math.ceil(tokens.length*.72)))return {status:'ok',found,missing,method:'conceptual',note:'Resultado provisório baseado nos termos reconhecidos.'};
 if(found.length>=2&&found.length>=Math.ceil(tokens.length*.34))return {status:'partial',found,missing:missing.slice(0,5),method:'conceptual-partial'};
 return {status:'review',found:found.slice(0,5),missing:[],method:'inconclusive'};
}
