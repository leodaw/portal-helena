# RC11 · Navegação horizontal e correção local orientadora

Data da release: 25/11/2026.

## Interface
- Menu horizontal no topo, sem comportamento fixo, com identificação sutil `RC11 · 25/11/2026`.
- Removidas integralmente do Meu Plano as caixas “Plano atualizado” e “Reforço de cobertura”.
- Destaque automático, calculado pelo relógio local, apenas para a data de hoje nos dois calendários. Fora de novembro/2026, nenhum dia recebe destaque de hoje.
- Inglês segue sem data, que será atualizada em versão futura, sem campo de edição no plano.

## Correção
- Corrige de maneira **orientadora**, após envio do simulado, e a pedido nas missões escritas; inclui confiança autodeclarada e conferência por adulto.
- Base local `pd/correction-bank.js` e `pd/correction-bank.json`: 210 questões com enunciado, gabarito autoral e referência do material-base e dos módulos, sem reproduzir páginas de livros.
- Algoritmo conservador: correspondência exata, números explícitos, conceitos e equivalências; respostas livres inconclusivas ficam para revisão humana. Não usa IA externa e não atribui nota definitiva.
- Não avalia desenhos automaticamente: o responsável confere a parte visual.
- Alerta: correspondência lexical pode gerar falsos positivos/negativos, especialmente em matemática e negativas; a revisão humana é indispensável.

## Compatibilidade
- Preserva `helena_pd_2026_v1`, `pd-rc6-prepara-120`, índices e questões anteriores.
- Campos novos: `confidence`, `challengeConfidence`, `reviewedQuiz`, `reviewedChallenges`.
- Não migra nem apaga respostas antigas; não atualiza respostas sem a criança editar.
- Atualização da versão não sincroniza progresso entre dispositivos; exportar backup antes de publicar.

## Limites
- O corretor **não consulta os PDFs** durante o uso, apenas sínteses e respostas-modelo incorporadas no HTML. Não há LLM, análise semântica avançada ou garantia de cobertura integral das variações possíveis.
- Arquivos e verificações automatizadas não substituem homologação com iPad, nem conferência dos gabaritos com material escolar e provas originais.

## Banco de correção
- Para cada questão, o avaliador consulta o gabarito registrado em `correction-bank.js` por disciplina e índice de questão. Conserva o texto da questão e a referência da página para auditoria.
- Há uma rubrica explícita para a questão `por:q21`, sobre homônimos homófonos; os demais itens utilizam comparação conservadora por resposta-modelo, conceitos e números, não interpretação semântica plena.
- Recomenda-se ampliar rubricas por questão após revisão humana, especialmente respostas com negação, enumerações e operações com justificativas.
