# Ateliê da Helena · RC6 (Simulados reconstruídos)

## O que mudou
- Reconstrução de 120 questões discursivas distribuídas igualmente em 6 disciplinas, 2 revisões de 10 questões.
- Formatos variados com textos autorais, diálogos, tabelas, fluxos, representações de frações e situações-problema, inspirados no padrão didático dos Preparas e fichas da escola.
- Reforço de interpretação, aplicação e justificativa; gabaritos de referência elaborados para os novos enunciados.
- Estímulos visuais compostos com HTML/CSS original; sem imagens de páginas ou trechos dos livros.
- Na leitura por voz, são lidos o texto, os estímulos e o enunciado quando disponíveis.
- Proteção de progresso: ao detectar a mudança da matriz de perguntas, as respostas da versão anterior são arquivadas no próprio progresso local (`quizArchive`) e não reaproveitadas em perguntas diferentes. O backup JSON continua disponível.

## Cobertura por matéria
- Inglês: Units 6 e 7, reading comprehension, should/shouldn't, vocabulário e interpretação.
- Português: compreensão, artigos, prefixos/sufixos, gêneros dos substantivos e parônimos.
- Geografia: cidades, funções urbanas, metrópoles, trabalho, setores econômicos.
- Ciências: calor, temperatura, transferência térmica, circuitos elétricos, magnetismo.
- História: cidadania, democracia, Constituição, Três Poderes, culturas afro-brasileiras.
- Matemática: frações e suas operações; frações/números decimais; operações decimais.

## Validação
- JavaScript sintaticamente válido (`node --check` nos dois scripts).
- Testes de simulação para as 6 disciplinas, 22 aulas e 12 revisões passaram.
- Testes adicionais checam a existência e variedade dos estímulos, integridade dos modelos de resposta e migração de progresso.
- Conferência editorial dos exercícios usando Prépara PD, Prepara adicional e ficha 29 de Inglês como referências de estilo. Os materiais não foram reproduzidos.
- A homologação real no iPad segue como próxima etapa após abrir a prévia.

## Publicação
- Arquivo `atelier_helena_rc6_preview.html` para homologação sem deploy.
- ZIP `portal_helena_pd_rc6.zip` para GitHub Pages. Não publicado automaticamente.
