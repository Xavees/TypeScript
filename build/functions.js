"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function login(userID, userName) {
    console.log("Bem vindo User : " + userName + " Com o ID : " + userID);
    return true;
}
login(1, "Xavees");
// o void na função é a tipagem que diz que não terá retorno.
// : tipoPrimitivo, diz qual o tipo primitivo da função no Retorno.
function soma(num1, num2) {
    let resultado = (num1 + num2);
    console.log(resultado);
    return resultado;
}
soma(1, 2);
