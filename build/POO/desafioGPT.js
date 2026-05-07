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
        if (this.vida < 0) {
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
    return class extends Curandeiro {
    };
}
