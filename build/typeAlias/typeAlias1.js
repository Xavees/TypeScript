"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usando o type pra criar um parametro pra ser utilizado, é como se eu tivesse criando um tipo primitivo pra utilizar 
function guardarDinheiro(dinheiro) {
    console.log("O seu dinheiro foi guardado");
    return false;
}
guardarDinheiro("300 reais");
function investimentos(regiaoMoeda, valor) {
    console.log(`O valor que irá transferir será de :  ${valor}`);
    console.log(`A sua moeda nativa é a ${regiaoMoeda}`);
}
investimentos("BRL", 200);
