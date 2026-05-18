interface NovoProduto<V> {
    nomeProduto: string;
    idProduto: V;

    formatar(valor: V): string;
}

const adicionarProduto: NovoProduto<number> = {
    nomeProduto: "Arroz Doce",
    idProduto: 1,

    formatar(valor: number): string {
        let valorFormato = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        return valorFormato;
    }
};