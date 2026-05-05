"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    nomeLoja;
    estadoLoja;
    nomeProprietario;
    constructor(nomeLoja, estadoLoja, nomeProprietario) {
        this.nomeLoja = nomeLoja;
        this.estadoLoja = estadoLoja;
        this.nomeProprietario = nomeProprietario;
    }
}
;
function adicionarLoja(addLoja) {
    console.log(`Adicionamos a loja ${addLoja.nomeLoja} que está com o estado ${addLoja.estadoLoja} do dono ${addLoja.nomeProprietario}`);
}
adicionarLoja({ nomeLoja: "Xavees Burguer", estadoLoja: true, nomeProprietario: "Xavees" });
