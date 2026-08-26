// Tipos de Objetos, Parecido com Objetos do JS
// o TS amplia e especifica mais ele, tornando o melhor
// podemos separar em interface
const mochila = {
    handgun: 10,
    shotgun: 5,
    granada: 3
};
// ou seja, pra ele receber essa interface BSAA ele precisa ter todos os requisitos solicitados em todas as interfaces
// exemplo: 
const agente = {
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
class AgenteBSAA {
    nome;
    distintivo;
    equipe;
    especialidade;
    patente;
    missaoAtual;
    constructor(nome, distintivo, equipe, especialidade, patente, missaoAtual) {
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
class ChrisRedfield {
    nome;
    distintivo;
    equipe;
    especialidade;
    patente;
    missaoAtual;
    constructor() {
        this.nome = "Chris Redfield";
        this.distintivo = "RPD-001";
        this.equipe = "Alpha Team";
        this.especialidade = "Combate";
        this.patente = "Capitão";
        this.missaoAtual = "Operação na África";
    }
}
export {};
