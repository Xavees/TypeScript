// exercicio proposto pelo GPT



type Arma = {
    nome: string;
    dano: number;
};

const pistola: Arma = {
    nome: "G19 Handgun",
    dano: 35
};

const shotgun: Arma = {
    nome: "M3 Shotgun",
    dano: 80
};

const jill = {
    nome: "Jill Valentine",
    armaFavorita: pistola
};


function equiparItem<T>(item: T): T {

    return item;

}


// Testes

const arma1 = equiparItem(pistola);

const arma2 = equiparItem(shotgun);

const personagem = equiparItem(jill);


console.log(arma1.nome);
console.log(arma2.dano);
console.log(personagem.nome);


// Generic Function Especificando argumento



function matarUsuario<T>(usuario:T, item:T):T{

     console.log("Assasinato registrado de : ")
    return usuario;
}



console.log(matarUsuario<string>("Ada", "Arma"))


// parametros default


function registrarUser(idade:number, usuario:string = "user001"  , id?:number):string{

    return "O usuario foi registrado com sucesso"
}

// OBRIGATÓRIOS → DEFAULT → OPCIONAL
// ordem de parametros :D
















