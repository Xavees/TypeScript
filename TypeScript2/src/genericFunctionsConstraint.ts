type Personagem = {
    nome: string;
    vida: number;
};

type Inimigo = {
    nome: string;
    vida: number;
    tipo: string;
};

const jill: Personagem = {
    nome: "Jill Valentine",
    vida: 100
};

const nemesis: Inimigo = {
    nome: "Nemesis",
    vida: 500,
    tipo: "B.O.W"
};


type TemVida = {
    vida: number;
};

function receberDano<T extends TemVida> ( personagem: T, dano: number ):T{

    personagem.vida -= dano;

    return personagem;


}


































