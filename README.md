# Ateliê de Estudos da Helena

Portal estático. Refatoração estrutural da V7, sem mudanças intencionais de aparência ou funcionalidade.

## Organização
- `index.html`: marcação e carregamento de recursos
- `css/`: estilos originais
- `js/app.js`: navegação, aulas, simulados, progresso e voz
- `data/matematica.js`, `data/ciencias.js`: conteúdo das duas disciplinas
- `data/historia-geografia-portugues.js`: conteúdo das outras três disciplinas
- `data/mentores.js`: imagens embutidas dos mentores

## Compatibilidade
As chaves `helena_ans_v4`, `helena_done_v4`, `helena_submit_v4` foram preservadas. Não alterar sem migração.

## Publicação
Hospedagem via GitHub Pages, branch `main`, pasta `/`. Todos os arquivos precisam ser enviados preservando os caminhos.

## Teste mínimo
Abrir por servidor HTTP local (ex.: `python -m http.server 8000`), verificar as cinco disciplinas, revisões, simulados, leitura por voz e persistência após recarregar.


**RC4:** consulte `RELEASE_PD_RC4.md`. O portal deixa de distribuir recortes dos livros e orienta a consultar os materiais originais.
