"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    id;
    idade;
    vulgo;
    constructor(id, idade, vulgo) {
        this.id = id;
        this.idade = idade;
        this.vulgo = vulgo;
    }
    consumir(quantidade, nomeDroga) {
        console.log(`A quantidade solicitada ${quantidade} , da droga ${nomeDroga}; foi requisitada na central;`);
    }
}
class Traficante extends Usuario {
    tempoTrafico;
    indicacao;
    constructor(id, idade, vulgo, tempoTrafico, indicacao) {
        super(id, idade, vulgo);
        this.tempoTrafico = tempoTrafico;
        this.indicacao = indicacao;
    }
    consumir(quantidade, nomeDroga) {
        console.log(`A quantidade solicitada ${quantidade} , da droga ${nomeDroga}; foi requisitada na central;`);
        return `A quantidade solicitada ${quantidade} , da droga ${nomeDroga}; foi requisitada na central;`;
    }
    vender(quantidade, nomeDroga, vulgoCliente) {
        console.log(`a quantidade ${quantidade},  solicitada pelo cliente ${vulgoCliente} da droga ${nomeDroga} foi vendida com sucesso`);
        return `a quantidade ${quantidade},  solicitada pelo cliente ${vulgoCliente} da droga ${nomeDroga} foi vendida com sucesso`;
    }
}
let gustavoUsuario = new Usuario(1, 17, "Gustavin");
gustavoUsuario.consumir(30, "Cocaina");
let heitorTraficante = new Traficante(1, 18, "Fiote", 1, "José beca");
heitorTraficante.vender(20, "Cocaina", "gustavoUsuario");
