import type { Categoria, Movimentacao, Produto } from './entidades.js';

export function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const produtos: Produto[] = [
  { id: 1, nome: 'Teclado mecanico', descricao: 'Switches azuis', categoriaId: 1, quantidade: 12 },
  { id: 2, nome: 'Mouse sem fio', categoriaId: 1, quantidade: 30 },
];

const categorias: Categoria[] = [
  { id: 1, nome: 'Perifericos' },
  { id: 2, nome: 'Cabos' },
];

const movimentacoes: Movimentacao[] = [
  { id: 1, produtoId: 1, tipo: 'entrada', quantidade: 20, data: '2026-08-01' },
  { id: 2, produtoId: 2, tipo: 'saida', quantidade: 5, data: '2026-08-05' },
];

export async function carregarProdutos(): Promise<Produto[]> {
  await esperar(50);
  return produtos;
}

export async function carregarCategorias(): Promise<Categoria[]> {
  await esperar(50);
  return categorias;
}

export async function carregarMovimentacoes(falhar: boolean): Promise<Movimentacao[]> {
  await esperar(50);
  if (falhar) {
    throw new Error('Falha ao carregar movimentacoes');
  }
  return movimentacoes;
}


export async function carregarMovimentacoesComAviso(falhar: boolean): Promise<Movimentacao[]> {
  try {
    return await carregarMovimentacoes(falhar);
  } catch (erro) {
    console.log('Falha ao carregar movimentacoes', erro);
    return [];
  }
}

export async function carregarTudo(falharMovimentacoes: boolean) {
  const [produtosCarregados, categoriasCarregadas, movimentacoesCarregadas] = await Promise.all([
    carregarProdutos(),
    carregarCategorias(),
    carregarMovimentacoesComAviso(falharMovimentacoes),
  ]);

  return {
    produtos: produtosCarregados,
    categorias: categoriasCarregadas,
    movimentacoes: movimentacoesCarregadas,
  };
}

export function buscarProduto(id: number): Produto | undefined {
  return produtos.find((produto) => produto.id === id);
}

export function nomeDoProduto(id: number): string {
  const produto = buscarProduto(id);
  if (produto === undefined) {
    return 'produto nao encontrado';
  }
  return produto.nome;
}

export function tamanhoDaDescricao(id: number): number {
  const produto = buscarProduto(id);
  return produto?.descricao?.length ?? 0;
}