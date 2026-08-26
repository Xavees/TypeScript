type Personagem = {
    nome: string;
    vida: number;
};

type Arma = {
    nome: string;
    dano: number;
};


const jill: Personagem = {
    nome: "Jill Valentine",
    vida: 100
};

const shotgun: Arma = {
    nome: "M3 Shotgun",
    dano: 80
};


function prepararCombate<T , U>(
    personagem: T,
    arma:U
) {

    return {
        personagem,
        arma
    };
}







const combate = prepararCombate(jill, shotgun);

console.log(combate.personagem.nome);
// Jill Valentine

console.log(combate.personagem.vida);
// 100

console.log(combate.arma.nome);
// M3 Shotgun

console.log(combate.arma.dano);
// 80