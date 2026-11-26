# RC10 · Cobertura curricular e lições aprendidas

## O que muda

- Registra dois incidentes relatados pela Helena, em Português (homônimos homófonos) e Ciências (fogo pré-histórico). **A conferência das provas aplicadas segue pendente**. Consulte `LESSONS_LEARNED_RC10.md`.
- Acrescenta **90 subtemas com explicação e questão**: História 20, Matemática 20, Inglês 20, Português 10, Ciências 10 e Geografia 10.
- Adiciona **nove módulos** de reforço ao final das disciplinas; os módulos e questões anteriores continuam com os mesmos IDs e na mesma ordem.
- Aumenta simulados para 4 revisões de 10 questões em História, Matemática e Inglês, e 3 revisões em Português, Ciências e Geografia. Revisões 1 e 2 inalteradas.
- Mostra um card de acesso prioritário às revisões de História, Matemática e Inglês.
- Os conteúdos novos são autorais e trazem referências aos livros e fichas. Não são reproduções de páginas protegidas por direitos autorais.
- Acrescenta matriz de rastreabilidade `pd/coverage.json` e verificador bloqueante `scripts/qa_rc10.py`.

## Integridade e limites

- Preservados `helena_pd_2026_v1` e `pd-rc6-prepara-120`, portanto sem reset das revisões anteriores. Questões novas só entram nas revisões 3 e 4.
- Continua usando localStorage do dispositivo; antes de publicar, exporte um backup no portal atual.
- Os testes automáticos verificam **rastreabilidade**, preservação de conteúdo, integridade de perguntas e sintaxe JS. Não demonstram cobertura de 100% de todas as variações possíveis. Exigem revisão pedagógica humana, em especial páginas escaneadas e materiais do Classroom ainda não enviados.
- As provas reais de Português e Ciências devem ser conferidas quando estiverem disponíveis.

## Verificação antes da publicação

Execute `python scripts/qa_rc10.py` com o ZIP da RC9 em `/mnt/data/portal_helena_pd_rc9.zip` se quiser comparar literalmente o conteúdo anterior; sem o ZIP, a etapa comparativa não roda. Abra a prévia standalone, acesse História / Matemática / Inglês e teste as revisões adicionais.
