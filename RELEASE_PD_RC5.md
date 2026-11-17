# Ateliê da Helena · PD RC5 (homologação)

## Backlog realizado

- **#001:** acesso à raiz abre a PD; AD permanece disponível em `ad.html`; jornada AD → PD aparece no header de ambas.
- **#002:** Meu Plano é a tela inicial da PD, fora das matérias, com calendário de provas de novembro, agenda de 16–27/11, tarefas marcáveis e progresso total.
- **#003:** Central de dúvidas preservada e reconstruída com busca, perguntas expansíveis e botão de aula relacionada.
- **#004:** DNA das Questões removido da interface infantil; arquivo de análise permanece apenas como suporte ao planejamento interno.
- **#005/#009/#012:** 22 módulos das seis matérias reconstruídos como aulas com 91 subseções, esquemas e desenhos SVG originais, exemplos, desafios e referências ao livro físico. Todo material é original/adaptado, sem prints de páginas do livro.
- **#006/#010:** 120 questões preservadas em duas revisões de dez; Inglês reformulado com textos curtos variados, situações, vocabulário, gramática e conselhos sobre natureza. Conferência da cobertura dos tópicos; reformulação de um enunciado ambíguo em Matemática. As demais disciplinas mantêm seus enunciados da RC4, que devem receber revisão pedagógica humana.
- **#007:** cartões AD consultados e diagnóstico histórico automático: Ciências 10/10; Matemática 8/10, incorretas 12 e 15; História 7/10, incorretas 4, 5 e 10; Geografia 9/10, incorreta 19; Português 10/10. Não disponível em Inglês. A AD contém assuntos diferentes da PD, portanto os erros antigos não são projetados automaticamente nos módulos novos.
- **#008:** retorno “Todos os módulos” foi destacado no topo e repetido ao final da aula.
- **#011:** mentores e mensagens fictícias retomados na PD, utilizando arte já presente na AD.
- **#013:** navegação de questões com estado de resposta, controles de leitura, blocos de explicação, FAQ e linguagem visual herdada da AD.

## Correção discursiva

**Não foi implementada correção automática nova.** Após o envio, o portal apenas exibe resposta da aluna e um modelo de referência para comparação, sem nota algorítmica.

## Preservação do progresso

Continua usando o mesmo identificador de armazenamento local `helena_pd_2026_v1`; rotinas de importação e exportação JSON são preservadas. A versão antiga da AD foi movida para `ad.html` mantendo seus caminhos de script e CSS.

## Testes e limitações

- `node --check`: sem erros nos scripts JS da PD.
- Testes simulados de lógica passaram nas 22 aulas, seis FAQ, 12 revisões (120 questões), resultado, diagnóstico e progresso.
- Foi tentada homologação visual com Chromium e Playwright, **bloqueada pelo ambiente (`ERR_BLOCKED_BY_ADMINISTRATOR`)**; ainda é necessário teste no Safari do iPad e no Chrome Android.
- Auditoria editorial: manter sempre apenas referências a páginas dos livros, nunca publicar imagens digitalizadas. Não há autorização implícita para reprodução das páginas ou figuras.

## Implantação

Copie **o conteúdo** do ZIP para a raiz do repositório `leodaw/portal-helena`, preservando as pastas. A URL raiz abre a PD e o link da jornada abre a AD. Faça backup do progresso do navegador antes de testar alterações importantes.
