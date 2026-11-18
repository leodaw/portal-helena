# RC8 · Lousa digital nas missões de aprendizagem

## Alterações
- Backlog #016: área de desenho digital em oito missões que pedem diagramas, linhas do tempo, mapas, esquemas, representações matemáticas ou placas ilustradas.
- Caneta, seletor de cor, espessura, borracha, desfazer e limpar com confirmação.
- Operação por mouse, toque e Apple Pencil usando Pointer Events; salvamento de traços vetoriais normalizados no mesmo `localStorage`, sem servidor.
- Campo de texto preservado lado a lado com o desenho para explicação ou cálculo.
- Todos os dados anteriores mantêm a chave `helena_pd_2026_v1`; nenhum identificador, `done`, `challenges`, `answers`, `scores`, `submitted` ou `plans` foi reinicializado.
- Os desenhos ficam em `pd.drawings` com chaves `disciplina:índice` e entram automaticamente no exportar/importar backup.

## Observações
- As ferramentas de desenho são para as **missões de aprendizagem das aulas**; as questões discursivas dos simulados continuam textuais.
- A função Apagar/Borracha pinta de branco sobre os traços, e Desfazer remove o último traço, inclusive um traço de borracha.
- A publicação no mesmo domínio e no mesmo navegador preserva os dados locais se não forem apagados pelo usuário ou navegador.
- Backup recomendado antes da publicação. O tamanho máximo do armazenamento depende do navegador; desenhos vetoriais economizam espaço.
