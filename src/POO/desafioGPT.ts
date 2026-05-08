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


// desafio que o gpt me propos e eu quebrei a cabeça pra fazer , mas consegui!


abstract class Personagem {
    readonly id:number
    protected nome:string
    private vida:number

    constructor(id:number, nome:string, vida:number){
        this.id = id;
        this.nome = nome;
        this.vida = vida;

    }

get controlarVida():number {
    return this.vida;
}

set minimoVida(vida:number) {
    if(vida < 0) {
        throw new Error("Vida Insuficiente"); 
    }
    this.vida = vida;

}

abstract atacar():void




}

class Guerreiro extends Personagem implements Inventario{
    public nomeGuerreiro:string

    constructor(id:number , nome:string , vida:number , nomeGuerreiro:string) {
        super(id,nome,vida);
        this.nomeGuerreiro = nomeGuerreiro;


    }

abrirInventario(): void {
    console.log("Inventário aberto");
}




atacar(): void {
    console.log(`O personagem ${this.nomeGuerreiro} , do player ${this.nome} está atacando !`)
}


}

class Arqueiro extends Personagem implements Inventario {
    public nomeArqueiro:string

    constructor (id:number , nome:string , vida:number , nomeArqueiro:string) {
        super(id,nome,vida)
        this.nomeArqueiro = nomeArqueiro;

    }
atacar(): void {
    console.log(`O personagem ${this.nomeArqueiro} do player ${this.nome} está dando flechada !`);
}

 abrirInventario():void {
     console.log("Inventário aberto");


 }


}

class Mago extends Personagem implements Inventario {
    public nomeMago:string

constructor (id:number,nome:string,vida:number, nomeMago:string) {
    super (id,nome,vida);
    this.nomeMago = nomeMago;
}


atacar(): void {
    console.log(`O personagem ${this.nomeMago} do player ${this.nome} está usando magia!`);
}

 abrirInventario():void {
     console.log("Inventário aberto");


 }




}


interface Inventario {
    abrirInventario():void



}


type Raridade = "Comum" | "Raro" | "Lendario";


class item {
    nome:string
    raridade:Raridade

    constructor(nome:string , raridade:Raridade) {
        this.nome = nome;
        this.raridade = raridade;

    }
}

function iniciarAtaque(personagem:Personagem){
    personagem.atacar();

}



function curandeiro(curar:any) {
    return class extends curar {
        mana:number
       constructor(...args:any[]) {
    super(...args);
    this.mana = 100;
}
        curar(){
            console.log(`o personagem  curou !`)
        }

    }

}


// testando as instancias das classes


const guerreiro = new Guerreiro(
    1,
    "Xavees",
    300,
    "Kratos"
);

const arqueiro = new Arqueiro(
    2,
    "Apollo",
    250,
    "Legolas"
);

const mago = new Mago(
    3,
    "MerlinPlayer",
    200,
    "Merlin"
);


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
