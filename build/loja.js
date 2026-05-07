"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let loja;
const burguerXavees = {
    nome: "Burguer Xavees",
    filal: "Burguer King",
    Rua: "Pedro Ferrer , 65",
    status: true
};
console.log(burguerXavees);
function criarLoja({ nome, filal, Rua, status }) {
    console.log(`o nome da loja é ${nome}`);
    console.log(`a loja é filiada á ${filal}`);
    console.log(`a loja fica na rua ${Rua}`);
    console.log(status);
}
criarLoja({ nome: "Mac Xavees", filal: "Mc Donalds", Rua: "Rua Pedro Ferrer", status: true });
