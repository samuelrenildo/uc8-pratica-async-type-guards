export type TipoMovimentacao = 'entrada' | 'saida';

export interface Produto {
    id: number;
    nome: string;
    descricao?: string;
    categoriaId: number;
    quantidade: number;
}

export interface Categoria {
    id: number;
    nome: string;
}

export interface Movimentacao {
    id: number;
    produtoId: number;
    tipo: TipoMovimentacao;
    quantidade: number;
    data: string;
}