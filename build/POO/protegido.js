"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Membro {
    id;
    nome;
    idade;
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
    solicitarRevisao(nomeSuspeito, nomeAdmin, motivo) {
        console.log(`O membro ${this.nome} , solicitou a revisâo do usuario ${nomeSuspeito} pro admin ${nomeAdmin} pelo motivo ${motivo}`);
    }
    postarAlgo(midiaPost, nomeUsuario) {
        console.log(`o seu post foi postado com sucesso`);
    }
}
class admin extends Membro {
    tempoAdm;
    constructor(id, nome, idade, tempoAdm) {
        super(id, nome, idade);
        this.tempoAdm = tempoAdm;
    }
    removerUser(userRemovido, motivo) {
        console.log(`o user ${userRemovido} foi removido pelo admin ${this.nome} pelo motivo : ${motivo}`);
    }
}
class testeProtegido {
    nomeTeste;
    constructor(nomeTeste) {
        this.nomeTeste = nomeTeste;
    }
}
// nao consigo usar o metodo protegido, pq eu to instanciando e assim usando o metodo fora da classe. 
let pedrowski = new Membro(1, "Pedro", 22);
pedrowski;
pedrowski.postarAlgo("O post de hoje é sobre breinrot", "pedrowski");
