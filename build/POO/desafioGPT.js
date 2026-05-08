"use strict";
/*
    🔥 Complete OOP Challenge — TypeScript RPG System

    This project was created from a challenge proposed by ChatGPT
    to practice the main concepts of Object-Oriented Programming in TypeScript.

    Concepts covered in this project:

    ✔️ Classes
    ✔️ Inheritance
    ✔️ Polymorphism
    ✔️ Encapsulation
    ✔️ Getters & Setters
    ✔️ Abstract Classes
    ✔️ Interfaces
    ✔️ Types & Union Types
    ✔️ Readonly
    ✔️ Private & Protected
    ✔️ Mixins

    The goal of this challenge is to simulate a small RPG system
    while applying OOP concepts in a practical and organized way.

    This project was made for study purposes and code practice.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// desafio que o gpt me propos e eu quebrei a cabeça pra fazer , mas consegui!
class Personagem {
    id;
    nome;
    vida;
    constructor(id, nome, vida) {
        this.id = id;
        this.nome = nome;
        this.vida = vida;
    }
    get controlarVida() {
        return this.vida;
    }
    set minimoVida(vida) {
        if (vida < 0) {
            throw new Error("Vida Insuficiente");
        }
        this.vida = vida;
    }
}
class Guerreiro extends Personagem {
    nomeGuerreiro;
    constructor(id, nome, vida, nomeGuerreiro) {
        super(id, nome, vida);
        this.nomeGuerreiro = nomeGuerreiro;
    }
    abrirInventario() {
        console.log("Inventário aberto");
    }
    atacar() {
        console.log(`O personagem ${this.nomeGuerreiro} , do player ${this.nome} está atacando !`);
    }
}
class Arqueiro extends Personagem {
    nomeArqueiro;
    constructor(id, nome, vida, nomeArqueiro) {
        super(id, nome, vida);
        this.nomeArqueiro = nomeArqueiro;
    }
    atacar() {
        console.log(`O personagem ${this.nomeArqueiro} do player ${this.nome} está dando flechada !`);
    }
    abrirInventario() {
        console.log("Inventário aberto");
    }
}
class Mago extends Personagem {
    nomeMago;
    constructor(id, nome, vida, nomeMago) {
        super(id, nome, vida);
        this.nomeMago = nomeMago;
    }
    atacar() {
        console.log(`O personagem ${this.nomeMago} do player ${this.nome} está usando magia!`);
    }
    abrirInventario() {
        console.log("Inventário aberto");
    }
}
class item {
    nome;
    raridade;
    constructor(nome, raridade) {
        this.nome = nome;
        this.raridade = raridade;
    }
}
function iniciarAtaque(personagem) {
    personagem.atacar();
}
function curandeiro(curar) {
    return class extends curar {
        mana;
        constructor(...args) {
            super(...args);
            this.mana = 100;
        }
        curar() {
            console.log(`o personagem  curou !`);
        }
    };
}
// testando as instancias das classes
const guerreiro = new Guerreiro(1, "Xavees", 300, "Kratos");
const arqueiro = new Arqueiro(2, "Apollo", 250, "Legolas");
const mago = new Mago(3, "MerlinPlayer", 200, "Merlin");
// testando o polimorfismo.
iniciarAtaque(guerreiro);
iniciarAtaque(arqueiro);
iniciarAtaque(mago);
guerreiro.abrirInventario();
console.log(guerreiro.controlarVida);
// teste do Setter
guerreiro.minimoVida = 150;
console.log(guerreiro.controlarVida);
// testando a versao error do Setter
guerreiro.minimoVida = -50;
