function somador(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(`A soma dos valores é : ${a + b} `);
    }
    else {
        console.log("Não da pra dar um retorno, coloque duas strings ou dois numbers.");
    }
}
// checar se o valor existe caso tenha undefined :
function operacao(arr, operation) {
    if (operation) {
        if (operation == "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        if (operation == "multi") {
            const multi = arr.reduce((i, total) => i * total);
        }
    }
    else {
        console.log("Por Favor defina sua operação !");
    }
}
operacao([1, 2], "sum");
// instance of 
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class userPremium extends User {
    constructor(name) {
        super(name);
    }
}
const stan = new User("Antony");
const koby = new userPremium("Dudu");
console.log(koby);
console.log(stan);
function testeUsuario(user) {
    if (user instanceof userPremium) {
        console.log("Usuario de plano Premium");
    }
    else if (user instanceof User) {
        console.log("O usuario é um user comum");
    }
    else {
        console.log("Usuario não cadastrado");
    }
}
// operador in
class Dog {
    nome;
    raca;
    constructor(nome, raca) {
        this.nome = nome;
        if (raca) {
            this.raca = raca;
        }
    }
}
const kiba = new Dog("Kiba");
const Hulk = new Dog("Hulk", "Pastor Alemão");
function mostrarDetalhesDog(dog) {
    if ('raca' in dog) {
        console.log(`O cachorro é da Raça ${dog.raca}`);
    }
    else {
        console.log("VIRA LATA!");
    }
}
class Usuario {
    review;
    nick;
    constructor(review, nick) {
        this.review = review;
        this.nick = nick;
    }
}
function receberReview(user) {
    if (typeof user.review === "number") {
        if (user.review === 1) {
            console.log(" Pessimo");
        }
        else if (user.review === 2) {
            console.log("Horrivel");
        }
        else if (user.review === 3) {
            console.log("OK");
        }
        else if (user.review === 4) {
            console.log("Bom");
        }
        else if (user.review === 5) {
            console.log("Otimo");
        }
    }
    else {
        return "Não deixou uma avaliação";
    }
}
export {};
