const jill = {
    nome: "Jill Valentine",
    vida: 100
};
const shotgun = {
    nome: "M3 Shotgun",
    dano: 80
};
function prepararCombate(personagem, arma) {
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
export {};
// 80
