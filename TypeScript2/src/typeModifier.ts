// =============================
// 1. readonly em INTERFACE
// =============================




// essa parte foi gerada por I.A, apartir dos meus codigos pra explicação detalhada do modificador Readonly.

interface Usuario {
    readonly id: number;
    nome: string;
}

const usuario: Usuario = {
    id: 1,
    nome: "Luis"
};

usuario.nome = "Fernando"; // ✅ pode mudar
// usuario.id = 2;         // ❌ não pode reatribuir


// =============================
// 2. readonly em TYPE
// =============================

type Produto = {
    readonly codigo: string;
    nome: string;
    preco: number;
};

const produto: Produto = {
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
    readonly id: number;
    nome: string;
    vida: number;

    constructor(id: number, nome: string, vida: number) {
        // ✅ readonly pode receber valor na inicialização
        this.id = id;

        this.nome = nome;
        this.vida = vida;
    }
}

const jill = new Personagem(
    1,
    "Jill Valentine",
    100
);

jill.vida = 80; // ✅

// jill.id = 10; // ❌
// Depois de inicializado, id não pode mudar.


// =============================
// 4. readonly em ARRAY
// =============================

const armas: readonly string[] = [
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
const ervas: ReadonlyArray<string> = [
    "Green Herb",
    "Red Herb"
];


// =============================
// 5. readonly em TUPLA
// =============================

const coordenada: readonly [number, number] = [
    10,
    20
];

console.log(coordenada[0]); // ✅
console.log(coordenada[1]); // ✅

// coordenada[0] = 50; // ❌
// Não podemos alterar posições da tupla.


// =============================
// 6. readonly array de OBJETOS
// =============================

interface Arma {
    nome: string;
    dano: number;
}

const inventario: readonly Arma[] = [
    {
        nome: "Shotgun",
        dano: 80
    }
];

// Não pode alterar o array:
// inventario.push({
//     nome: "Magnum",
//     dano: 100
// }); // ❌


// MAS cuidado:
//inventario[0].dano = 200; // ✅

// Por quê?
// readonly protege o ARRAY,
// não necessariamente o conteúdo interno do objeto.


// =============================
// 7. readonly no array E no objeto
// =============================

interface ArmaImutavel {
    readonly nome: string;
    readonly dano: number;
}

const arsenal: readonly ArmaImutavel[] = [
    {
        nome: "Samurai Edge",
        dano: 50
    }
];

// arsenal.push(...)       // ❌ array readonly
// arsenal[0] = ...        // ❌ array readonly
// arsenal[0].dano = 100;  // ❌ propriedade readonly


/* readonly propriedade
→ não pode reatribuir aquela propriedade

readonly array
→ não pode modificar a estrutura do array

readonly tupla
→ não pode alterar suas posições */ 