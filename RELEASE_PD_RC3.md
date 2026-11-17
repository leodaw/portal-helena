# RC3 · PD de novembro 2026

## Implementado
- DNA das questões por disciplina: padrões qualitativos observados nas provas AD, com ressalva explícita de que o programa AD é diferente do programa PD.
- Diagnóstico: seleção manual das questões AD difíceis, confiança por módulo da PD e observações; salvo no mesmo backup da PD.
- Plano de estudos de 16 a 27/11, com datas oficiais e prioridades por assunto marcado como difícil; tarefas concluídas são persistidas.
- Preservadas duas revisões com dez questões por disciplina, 120 no total.
- Correção discursiva **não alterada**, por solicitação.
- Portal AD anterior e chaves de armazenamento anteriores preservados.

## Limitações
- A análise de DNA é qualitativa e não um mapeamento questão-a-questão ou prova de domínio.
- Os erros específicos da Helena precisam ser confirmados manualmente; não foram inferidos a partir das provas fotografadas.
- Plano é uma sugestão de estudo, não uma agenda automática vinculada a calendário.
- Sem validação visual em navegador: Chrome automatizado bloqueado por política de ambiente. Testes de sintaxe e lógica JavaScript executados.

## Testes
- `node --check pd/dna.js` e `node --check pd/pd.js`.
- `node test_helena_rc3.js` (script de testes de integração com DOM simulado, externo ao ZIP): 6 disciplinas, 120 questões, navegação, armazenamento, cronograma e revisões.
- Verificação de arquivos e integridade do ZIP.
