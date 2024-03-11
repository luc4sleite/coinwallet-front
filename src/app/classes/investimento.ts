export class Investimento {
    id: number;
    nome: string;
    valorInvestido: number;
    valorTotal: number;
    vencimento: string;
    dataCompra: string;
    iof: number;
    indice: number;
    tipo: string;
    precoUnitario: number;
    urlImg: string;
    constructor(id: number, nome: string, valorInvestido: number, valorTotal: number, vencimento: string, dataCompra: string, iof: number, indice: number, tipo: string, precoUnitario: number, urlImg: string) {
        this.id = id;
        this.nome = nome;
        this.valorInvestido = valorInvestido;
        this.valorTotal = valorTotal;
        this.vencimento = vencimento;
        this.dataCompra = dataCompra;
        this.iof = iof;
        this.indice = indice;
        this.tipo = tipo;
        this.precoUnitario = precoUnitario;
        this.urlImg = urlImg;
    }
}
