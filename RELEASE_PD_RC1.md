# Ateliê da Helena · PD 3º período · RC2 (não publicada)

## O que está incluído
- Mantém a rodada AD anterior e suas chaves `helena_ans_v4`, `helena_done_v4`, `helena_submit_v4`.
- Nova rodada em `pd/index.html`: seis disciplinas, revisão, visão geral, duas revisões discursivas de dez questões por disciplina (20 questões por disciplina, 120 no total), consulta a imagens reais dos materiais, dúvidas, leitura por voz, histórico de respostas e backup JSON.
- Dados da PD isolados na chave `helena_pd_2026_v1`.
- Navegação para a PD a partir da página inicial da AD, sem alterar o CSS aprovado.
- Material de estudo e questões novas baseados no programa, fichas e livros enviados. As questões são autorais, não reproduções literais da escola.

## Limitações importantes antes de publicar
1. **Correção:** apenas triagem por expressões, com resposta-modelo. Não atribui nota numérica nem substitui avaliação humana. A IA corretora ainda é backlog.
2. **DNA das questões:** ainda falta a análise comparativa, questão por questão, das cinco AD e dos dois Preparas. Não há carimbos de correspondência comprovados nesta RC.
3. **Referências:** as imagens são páginas fotografadas reais, mas ainda é necessário revisar a correspondência exata entre cada pergunta e o recorte. Algumas questões compartilham uma página de referência geral do capítulo.
4. **Leitura por voz:** depende das vozes instaladas no Chrome Android; não há garantia de voz em inglês disponível offline.
5. **Português:** há texto original de interpretação, inspirado no formato escolar, mas ainda requer revisão editorial contra as fichas completas.
6. **Testes:** JS passou na checagem de sintaxe; testes automatizados de lógica verificaram seleção de revisão, isolamento das respostas, envio, resultados, persistência local e migração da RC1. Também foram verificados os 120 enunciados e os caminhos de referência. O ambiente bloqueou a abertura do navegador automatizado; ainda faltam homologação visual e funcional no Chrome Android e testes reais de exportação/importação de backup.
7. **Privacidade:** não inserir dados identificáveis da criança no repositório público. Respostas e notas ficam somente no navegador e em backup exportado manualmente.

## Backlog para RC2
- Revisar recortes por página, com referência de capítulo/página e evidência em questão/revisão/dúvida.
- Analisar 50 questões AD, gabaritos e erros, gerar tabela de rastreabilidade com Prepara, fichas e livros.
- Revisar e enriquecer todos os módulos com exemplos, exercícios e textos de interpretação mais longos.
- Implementar rubricas de correção discursiva por critérios, marcação de incerteza e revisão de responsável.
- Criar agenda de estudo compatível com 17 e 18/11 à noite; 22/11 à tarde/noite; noites após as provas.
- Avaliar PWA, funcionamento offline, service worker e instalação no Chrome Android.
- Implementar histórico de tentativas sem apagar resultados anteriores.
- Testes de interface em telas pequenas, acessibilidade e fluxo de envio.
- Definir estratégia de publicação em branch de homologação e rollback.

## Ajustes RC2
- Revisão 1 e Revisão 2 independentes, cada uma com dez questões por disciplina.
- Respostas, estado de envio, marcação de consulta e resultados isolados por revisão.
- Dados já preenchidos na RC1 são reaproveitados na Revisão 1 quando possível.
- O portal público não foi alterado.
