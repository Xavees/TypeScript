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
// Arrow Functions 
const retornoAPI = (url) => {
    console.log("URL DA API " + url);
};
retornoAPI("HTTPS.XAVEESDELOCHO.COM.BR");
// Metodo com Parametros Default.
function cadastro(nome, email, idade, senha = "12345678") {
    let objeto = { nome, email, senha };
    console.log(objeto);
    return "Obrigado por se cadastrar  :" + nome + " com o Email " + email;
}
cadastro("Xavees", "Luisfernando1337x@gmail.com");
// Rest Params in Functions.
function totalVendas(...vendas) {
    const qtdVendas = vendas.length;
    console.log("A quantidade de vendas foi de " + qtdVendas);
}
totalVendas();
// passe quantos parametros quiser...
