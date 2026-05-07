"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ? operador pra destacar que essa variavel é opcional;
const userCadastrado = {
    nome: "Xavees",
    idade: 20,
    cpf: 146532,
};
// jogando a interface em um objeto e usando os padrões pré definidos.
console.log(userCadastrado);
function cadastrarUsuario({ nome, idade, cpf, genero }) {
    console.log(`O seu nome é ${nome}`);
    console.log(` a sua idade é ${idade}`);
    console.log(`o seu cpf é ${cpf}`);
    console.log(`o seu genero é ${genero}`);
    return true;
}
cadastrarUsuario({ nome: "Xavees", idade: 20, cpf: 5463, genero: "Masculino" });
function cadastrarCachorro(cadastrarCachorro) {
    console.log(`o nome do cachorro é ${cadastrarCachorro.nome}`);
    console.log(`a idade do cachorro é de ${cadastrarCachorro.idade}`);
    console.log(`A raça do cachorro é a ${cadastrarCachorro.raca}`);
    console.log(`O cachorro está bem ? ${cadastrarCachorro.vivo}`);
    return true;
}
cadastrarCachorro({ nome: "Bolinha", idade: 3, raca: "Vira Lata", vivo: true });
// aqui eu usei o padrão que eu pego os atributos já da interface e uso na função, acho que assim é melhor pelo codigo ficar menos confuso e ter menos chance de erro ( se eu crio os parametros, tambem tem a chance de eu criar um parametro que não está na interface, assim quebrando o codigo :D);
