// Node VM smoke-test for offline portal boot, dynamic review navigation and legacy state.
const vm=require('vm'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');const data={
 answers:{'his:r1':{'0':'RESPOSTA PRESERVADA'}},done:{'his:0':true},
 submitted:{'his:r1':true},assisted:{},scores:{'his:r1':'Aguardando conferência'},
 questionSetVersion:'pd-rc6-prepara-120',challenges:{'geo:1':'TESTE PRESERVADO'},drawings:{'geo:1':{strokes:[]}}
};const store={'helena_pd_2026_v1':JSON.stringify(data)};
const elements={};const sandbox={console,Date,Math,JSON,Array,Number,String,Object,RegExp,Boolean,Set,Map,
 localStorage:{getItem(k){return store[k]??null},setItem(k,v){store[k]=v}},
 document:{getElementById(id){return elements[id]??(elements[id]={innerHTML:'',value:''})}},
 window:{scrollTo(){}},speechSynthesis:{cancel(){}},confirm(){return true},alert(){},
};vm.createContext(sandbox);
for(const file of ['data/mentores.js','pd/content.js','pd/dna.js','pd/pd.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file});
const run=x=>vm.runInContext(x,sandbox);
const count=run('Object.fromEntries(ids.map(id=>[id,reviewCount(id)]))');
const results=JSON.parse(JSON.stringify(count));
if(JSON.stringify(results)!==JSON.stringify({en:4,por:3,geo:3,cie:3,his:4,mat:4}))throw Error('Quantidade incorreta: '+JSON.stringify(results));
run("go('his');jumpQuiz(3)");let markup=elements['pd-app'].innerHTML;
if(!markup.includes('Revisão 3')||!markup.includes('República')||!markup.includes('QUESTÃO 1'))throw Error('Revisão 3 falhou');
run("go('mat');jumpQuiz(4)");markup=elements['pd-app'].innerHTML;
if(!markup.includes('Revisão 4')||!markup.includes('Frações decimais'))throw Error('Revisão 4 Matemática falhou');
run("go('en');jumpQuiz(4)");markup=elements['pd-app'].innerHTML;
if(!markup.includes('Revisão 4')||!markup.includes('Nature'))throw Error('Revisão 4 Inglês falhou');
let persisted=JSON.parse(store.helena_pd_2026_v1);
if(persisted.answers['his:r1']['0']!=='RESPOSTA PRESERVADA'||persisted.done['his:0']!==true||persisted.challenges['geo:1']!=='TESTE PRESERVADO')throw Error('Regressão de progresso');
if(!persisted.drawings['geo:1'])throw Error('Perdeu desenhos');
run("go('por');jumpQuiz(3)");markup=elements['pd-app'].innerHTML;
if(!markup.includes('Revisão 3')||!markup.includes('Homônimos'))throw Error('Reforço Português falhou');
console.log('OK: 6 disciplinas; revisões 3/4; questões novas; progresso antigo, respostas, desenhos e missões preservados');
