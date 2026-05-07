"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nomeFuncionario;
    tempoEmpresa;
    setorAtual;
    constructor(nomeFuncionario, tempoEmpresa, setorAtual) {
        this.nomeFuncionario = nomeFuncionario;
        this.tempoEmpresa = tempoEmpresa;
        this.setorAtual = setorAtual;
    }
    baterPonto(horario) {
        console.log(`o Ponto do funcionario ${this.nomeFuncionario} foi batido no ${horario}`);
        return true;
    }
}
class gerenteSetor extends Funcionario {
    tempoSetor;
    constructor(nomeFuncionario, tempoEmpresa, setorAtual, tempoSetor) {
        // chamando o construtor da classe pai  
        super(nomeFuncionario, tempoEmpresa, setorAtual);
        this.tempoSetor = tempoSetor;
    }
}
const gerenteSuper = new gerenteSetor("Xavees", 4, "Desenvolvimento de Software ", 5);
console.log(gerenteSuper);
