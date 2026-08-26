// REST OPERATOR e SPREAD operator Diferenças 


function mostrarInventario(
    personagem: string,
    ...itens: string[]
) {
    console.log(`Inventário de ${personagem}:`);

    console.log(itens);

    console.log("Itens separados:");
    console.log(...itens);
}

mostrarInventario(
    "Jill",
    "Handgun",
    "Shotgun",
    "Lock Pick",
    "Green Herb"
);



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




// keyof 

interface personagem  {
    nome:string
    vida:number
    infectado:boolean


}


let propsPersonagem : keyof personagem;



function mostrarProps(personagem:personagem , propriedade: keyof personagem){

console.log(personagem[propriedade]);
}


const Sheva_Alomar: personagem = {
    nome: "Sheva Alomar ",
    vida: 100,
    infectado: false
};


mostrarProps(Sheva_Alomar,"nome")
mostrarProps(Sheva_Alomar,"vida")
mostrarProps(Sheva_Alomar,"infectado")



// usamos key of pra criar meio que um verificador que irá permitir a verificação das variaveis dentro das propriedades das interfaces.




// usamos typeof pra criar um tipo que recebe algum outro tipo ja usado mas não especificado, ex:


const Nemesis = {
    objetivo: "Jill",
    vida: 1000,
    infectado: true
};

type VirusT = typeof Nemesis;




let MrX:VirusT = {
    objetivo:"Claire Redfield",
    vida:500,
    infectado:true
}


console.log(Nemesis.vida)
console.log(Nemesis.infectado)
console.log(Nemesis.objetivo)



console.log(MrX.vida)
console.log(MrX.infectado)
console.log(MrX.objetivo)




/*


const jill = {
    nome: "Jill",
    vida: 100,
    infectada: false
};

        ↓ typeof

{
    nome: string;
    vida: number;
    infectada: boolean;
}

        ↓

type Personagem



*/


//                                          Indexed Access Type.



type Personagem = {
    nome: string;
    vida: number;
    arma: {
        nome: string;
        dano: number;
    };
};

/* Inves de fazer isso : 
type Arma = {
    nome: string;
    dano: number;
};

*/ 


// vou fazer isso : 

type Arma = Personagem["arma"];

// isso permite que, se dentro do tipo Personagem, a propriedade Arma mudar, esse type vai acompanhar a mudança, ideal pra codigo escalavel



//                                     Conditional  Types


interface A {

}

interface B extends A {

}


type Mytype = B extends A ? number : string


const teste:Mytype = 1;
// const testeNfunfa:Mytype = "String nao funciona";



//                  Template Literals Type



type Nome = "Jill" | "Chris";

type Mensagem = `Olá ${Nome}`;
// ele vai guardar mensagem como se fosse uma variavel. É bem parecido com o Template literals string do JS, a diferença é que literalmente vira um tipo primitivo




