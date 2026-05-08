"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = exports.Pessoa = void 0;
class Pessoa {
    nome;
    ip;
    cpf;
    constructor(nome, ip, cpf) {
        this.nome = nome;
        this.ip = ip;
        this.cpf = cpf;
    }
    disparar() {
        console.log(`disparado`);
    }
}
exports.Pessoa = Pessoa;
class Carro {
    nomeVeiculo;
    marcaVeiculo;
    constructor(nomeVeiculo, marcaVeiculo) {
        this.nomeVeiculo = nomeVeiculo;
        this.marcaVeiculo = marcaVeiculo;
    }
    acelerar() {
        console.log(`VRUUUUUUUUUUUUUUUUUUUUUUM`);
    }
}
exports.Carro = Carro;
