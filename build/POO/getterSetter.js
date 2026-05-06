"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Escola {
    id;
    nomeDiretora;
    nomeEscola;
    constructor(id, nomeDiretora, nomeEscola) {
        this.id = id;
        this.nomeDiretora = nomeDiretora;
        this.nomeEscola = nomeEscola;
    }
    matricularAluno(idAluno, nomeAluno) {
        console.log(`O aluno ${nomeAluno} foi matriculado na ${this.nomeEscola}`);
    }
    get diretora() {
        return this.nomeDiretora;
    }
    set diretora(nomeDiretora) {
        if (nomeDiretora.length < 3) {
            throw new Error("Nome inválido");
        }
        this.nomeDiretora = nomeDiretora;
    }
    get escola() {
        return this.nomeEscola;
    }
}
