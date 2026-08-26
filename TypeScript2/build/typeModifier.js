// =============================
// 1. readonly em INTERFACE
// =============================
const usuario = {
    id: 1,
    nome: "Luis"
};
usuario.nome = "Fernando"; // ✅ pode mudar
const produto = {
    codigo: "P001",
    nome: "Notebook",
    preco: 3500
};
produto.preco = 4000; // ✅
// produto.codigo = "P002"; // ❌
// =============================
// 3. readonly em CLASSE
// =============================
class Personagem {
    id;
    nome;
    vida;
    constructor(id, nome, vida) {
        // ✅ readonly pode receber valor na inicialização
        this.id = id;
        this.nome = nome;
        this.vida = vida;
    }
}
const jill = new Personagem(1, "Jill Valentine", 100);
jill.vida = 80; // ✅
// jill.id = 10; // ❌
// Depois de inicializado, id não pode mudar.
// =============================
// 4. readonly em ARRAY
// =============================
const armas = [
    "Samurai Edge",
    "Shotgun",
    "Magnum"
];
// Podemos ler:
console.log(armas[0]); // ✅
// Mas não podemos modificar:
// armas.push("Grenade Launcher"); // ❌
// armas.pop();                    // ❌
// armas[0] = "Knife";             // ❌
// Outra forma equivalente:
const ervas = [
    "Green Herb",
    "Red Herb"
];
// =============================
// 5. readonly em TUPLA
// =============================
const coordenada = [
    10,
    20
];
console.log(coordenada[0]); // ✅
console.log(coordenada[1]); // ✅
const inventario = [
    {
        nome: "Shotgun",
        dano: 80
    }
];
const arsenal = [
    {
        nome: "Samurai Edge",
        dano: 50
    }
];
export {};
// arsenal.push(...)       // ❌ array readonly
// arsenal[0] = ...        // ❌ array readonly
// arsenal[0].dano = 100;  // ❌ propriedade readonly
/* readonly propriedade
→ não pode reatribuir aquela propriedade

readonly array
→ não pode modificar a estrutura do array

readonly tupla
→ não pode alterar suas posições */ 
