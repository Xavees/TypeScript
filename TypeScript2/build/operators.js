// REST OPERATOR e SPREAD operator Diferenças 
function mostrarInventario(personagem, ...itens) {
    console.log(`Inventário de ${personagem}:`);
    console.log(itens);
    console.log("Itens separados:");
    console.log(...itens);
}
mostrarInventario("Jill", "Handgun", "Shotgun", "Lock Pick", "Green Herb");
// rest operator: permite que a função receba X valores nos parametros, 
// SPREAD Operator : espalha os itens em uma ordem na hora de imprimir
// o operador é o mesmo, o que muda é aonde é utilizado.
// DESTRUCTURING.ts
const jill = {
    nome: "Jill",
    vida: 100,
    arma: "Handgun"
};
const { nome, ...resto } = jill;
let propsPersonagem;
function mostrarProps(personagem, propriedade) {
    console.log(personagem[propriedade]);
}
const Sheva_Alomar = {
    nome: "Sheva Alomar ",
    vida: 100,
    infectado: false
};
mostrarProps(Sheva_Alomar, "nome");
mostrarProps(Sheva_Alomar, "vida");
mostrarProps(Sheva_Alomar, "infectado");
// usamos key of pra criar meio que um verificador que irá permitir a verificação das variaveis dentro das propriedades das interfaces.
// usamos typeof pra criar um tipo que recebe algum outro tipo ja usado mas não especificado, ex:
const Nemesis = {
    objetivo: "Jill",
    vida: 1000,
    infectado: true
};
let MrX = {
    objetivo: "Claire Redfield",
    vida: 500,
    infectado: true
};
console.log(Nemesis.vida);
console.log(Nemesis.infectado);
console.log(Nemesis.objetivo);
console.log(MrX.vida);
console.log(MrX.infectado);
console.log(MrX.objetivo);
const teste = 1;
export {};
// ele vai guardar mensagem como se fosse uma variavel. É bem parecido com o Template literals string do JS, a diferença é que literalmente vira um tipo primitivo
