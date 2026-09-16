# uc8-pratica-async-type-guards

Prática do encontro 4 - Repositório, async e type guards.

## O que cada arquivo faz

- **`src/entidades.ts`** - define os tipos do domínio: `TipoMovimentacao`, e as interfaces `Categoria`, `Produto` e `Movimentacao`.
- **`src/servicos.ts`** - dados simulados e as funções assíncronas que carregam produtos, categorias e movimentações; trata a falha simulada com try/catch e `Promise.all`; e as funções do modo estrito (`buscarProduto`, `nomeDoProduto`, `tamanhoDaDescricao`) usando `?.` e `??`.
- **`src/guardas.ts`** - os dois type guards: `ehProduto` (verifica `categoriaId`) e `ehMovimentacao` (verifica `tipo`).
- **`src/main.ts`** - chama `carregarTudo` forçando a falha simulada, testa as funções do modo estrito e filtra as saídas com `ehMovimentacao`.

## Saída de `node dist/main.js`

Falha ao carregar movimentacoes Error: Falha ao carregar movimentacoes
    at carregarMovimentacoes (C:\Users\a95984530\uc8-pratica-async-type-guards\dist\servicos.js:40:15)
    at async carregarMovimentacoesComAviso (C:\Users\a95984530\uc8-pratica-async-type-guards\dist\servicos.js:46:16)
    at async Promise.all (index 2)
    at async carregarTudo (C:\Users\a95984530\uc8-pratica-async-type-guards\dist\servicos.js:54:81)
    at async main (C:\Users\a95984530\uc8-pratica-async-type-guards\dist\main.js:6:19)
Produtos: 2
Categorias: 2
Movimentacoes: 0
Nome do produto 1: Teclado mecanico
Nome do produto 99: produto nao encontrado
Tamanho da descricao do produto 1: 14
Saidas: 0


## Por que o type guard não converte o valor

Um type guard só afirma, para o compilador, um tipo que o valor já tinha em tempo de execução; nada no dado em si muda.