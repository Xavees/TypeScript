const jill = {
    nome: "Jill Valentine",
    vida: 100
};
const nemesis = {
    nome: "Nemesis",
    vida: 500,
    tipo: "B.O.W"
};
function receberDano(personagem, dano) {
    personagem.vida -= dano;
    return personagem;
}
export {};
