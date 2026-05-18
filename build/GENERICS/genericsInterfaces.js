"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adicionarProduto = {
    nomeProduto: "Arroz Doce",
    idProduto: 1,
    formatar(valor) {
        let valorFormato = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
        return valorFormato;
    }
};
