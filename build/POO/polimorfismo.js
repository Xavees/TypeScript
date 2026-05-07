"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    fazerSom() {
        console.log("Som Generico");
    }
}
class Cachorro extends Animal {
    fazerSom() {
        console.log("auau");
    }
}
class Gato extends Animal {
    fazerSom() {
        console.log("Miau");
    }
}
function emitirSom(animal) {
    animal.fazerSom();
}
emitirSom(new Gato);
emitirSom(new Cachorro);
