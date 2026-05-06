"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    id;
    taxaJuros;
    nomeUsuario;
    saldoConta;
    constructor(id, taxaJuros, nomeUsuario, saldoConta) {
        this.id = id;
        this.taxaJuros = taxaJuros;
        this.nomeUsuario = nomeUsuario;
        this.saldoConta = saldoConta;
    }
    calcularJuros(valor) {
        return valor * this.taxaJuros;
    }
    pedirEmprestimo(valorEmprestimo) {
        const juros = this.calcularJuros(valorEmprestimo);
        const total = valorEmprestimo + juros;
        console.log(`Você pediu ${valorEmprestimo} e pagará ${total}`);
    }
}
const usuario1 = new Conta(1, 0.5, "Xavees", 300);
usuario1.pedirEmprestimo(100);
