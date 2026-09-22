import { carregarTudo, buscarProduto, nomeDoProduto, tamanhoDaDescricao } from './servicos.js';
import { ehMovimentacao } from './guardas.js';
import { Produto, Movimentacao } from './entidades.js';

async function main() {
    const { produtos, categorias, movimentacoes } = await carregarTudo(true);

    console.log(`Produtos: ${produtos.length}`);
    console.log(`Categorias: ${categorias.length}`);
    console.log(`Movimentacoes: ${movimentacoes.length}`);

    const idExemplo = produtos[0]?.id ?? 0;
    buscarProduto(idExemplo);
    console.log(`Nome do produto ${idExemplo}: ${nomeDoProduto(idExemplo)}`);
    console.log(`Nome do produto 99: ${nomeDoProduto(99)}`);
    console.log(`Tamanho da descricao do produto ${idExemplo}: ${tamanhoDaDescricao(idExemplo)}`);

    const itens: (Produto | Movimentacao)[] = [...produtos, ...movimentacoes];
    const saidas = itens.filter(ehMovimentacao).filter((item) => item.tipo === 'saida');
    console.log(`Saidas: ${saidas.length}`);
}

main();