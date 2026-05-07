"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    nomeLoja;
    idloja;
    nomeProprietario;
    constructor(nomeLoja, idloja, nomeProprietario) {
        this.nomeLoja = nomeLoja;
        this.idloja = idloja;
        this.nomeProprietario = nomeProprietario;
    }
    adicionarLoja() {
        console.log("Loja Adicionada com Sucesso.");
    }
    emitirPedidos(mesa, pedido) {
        console.log(`a mesa numero : ${mesa} vai receber o pedido ${pedido} na loja ${this.nomeLoja}`);
    }
}
const loja = new Loja("Loja do josè", 1, "Xavees");
loja.emitirPedidos(13, "Lasanha");
