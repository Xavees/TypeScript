// Tipos de Objetos, Parecido com Objetos do JS
// o TS amplia e especifica mais ele, tornando o melhor
// podemos separar em interface



// INTERFACES e TYPE


type Personagem = {
    nome: string;
    vida: number;
};

type Agente = Personagem & {
    organizacao: string;
};

// & é o extends dos Type

type arma = {
    calibre:number,
    numeracao:number
    fabricante?:string
}

// INTERFACE index Signature
// permite que eu coloque quantas propriedas forem necessarias conforme vc coloca aqeula interface dentro de uma variavel

interface Inventario {
    handgun: number;
    shotgun: number;
    [item:string] : number;
}

const mochila: Inventario = {
    handgun: 10,
    shotgun: 5,
    granada: 3 
};


// INTERFACE interagindo com classes


interface Policial {
    nome: string;
    distintivo: string;
    apelido?:string;
}
 // extends é utilizado pra "herança" de uma interface pra outra. 
interface STARS extends Policial {
    equipe: string;
    especialidade: string;
}

interface BSAA extends STARS {
    patente: string;
    missaoAtual: string;
}

// ou seja, pra ele receber essa interface BSAA ele precisa ter todos os requisitos solicitados em todas as interfaces
 // exemplo: 

const agente: BSAA = {
    nome: "Chris Redfield",
    distintivo: "RPD-001",

    equipe: "Alpha Team",
    especialidade: "Combate",

    patente: "Capitão",
    missaoAtual: "Operação na África"
};

// CLASSES RECEBEM usando implements, enquanto a herança entre interfaces é usado extends.
// uma classe não da extends em uma interface, e sim implements
//  vc implementa a essa classe a interface.


 // usando classe generica :D

class AgenteBSAA implements BSAA {
    nome: string;
    distintivo: string;
    equipe: string;
    especialidade: string;
    patente: string;
    missaoAtual: string;

    constructor(
        nome: string,
        distintivo: string,
        equipe: string,
        especialidade: string,
        patente: string,
        missaoAtual: string
    ) {
        this.nome = nome;
        this.distintivo = distintivo;
        this.equipe = equipe;
        this.especialidade = especialidade;
        this.patente = patente;
        this.missaoAtual = missaoAtual;
    }

    apresentar() {
        console.log(`${this.nome} - ${this.patente}`);
    }
}









// classe especifica pra um user 


class ChrisRedfield implements BSAA {
    nome: string;
    distintivo: string;
    equipe: string;
    especialidade: string;
    patente: string;
    missaoAtual: string;

    constructor() {
        this.nome = "Chris Redfield";
        this.distintivo = "RPD-001";
        this.equipe = "Alpha Team";
        this.especialidade = "Combate";
        this.patente = "Capitão";
        this.missaoAtual = "Operação na África";
    }
}





