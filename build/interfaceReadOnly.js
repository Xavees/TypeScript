"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let conjuntoTenis = {
    id: "1",
    nomeProduto: "Tênis",
    lojaRequisitora: "Adidas",
    estoque: true
};
function adicionarTenis(adicionarTenis) {
    console.log(`O Produto ${conjuntoTenis.nomeProduto} com o id ${conjuntoTenis.id} foi adicionado ao estoque ${conjuntoTenis.estoque} pela requisitora ${conjuntoTenis.lojaRequisitora}`);
}
adicionarTenis({ id: "1", nomeProduto: "Tenis", lojaRequisitora: "Adidas", estoque: true });
