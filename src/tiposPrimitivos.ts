// Tipo Number

let valor1:Number

valor1 = 30;

console.log(valor1);


// Tipo String


let frase:String

frase = "Olá , seja bem vindo. Esse é o tipo String do TypeScript.";
console.log(frase);


// Tipo Inference 


let typeInference 

typeInference = "O typeScript vai deduzir que é tipo String, por eu estar adicionando uma String a variavel";

console.log(typeInference);

// Number

let valor3:Number = 40;

console.log("Adicionando o valor na declaração da variavel" + valor3);


// Union Type

let userId:String | Number;


console.log("Usando o operador logico || da pra definir a variavel sendo os dois, tanto String quanto Number");

 // any



let produto:any = "any";

console.log (" o Tipo primitivo any literalmente é o padrão do JavaScript que aceita qualquer tipo primitivo."); 


// BOOLEAN

let mercado:boolean = true

console.log ("Boolean, literalmente true or false.");


console.log(typeof mercado);





// transformando String em Boolean



let banana:String = "agua";

let agua:boolean = true;

agua = Boolean(banana);


/* Transformando uma variavel do tipo String em boolean, da pra fazer isso com qualquer variavel, mas so dara false se a variavel for vazia ou igual a 0 se for Number;*/
 


//Tipo Array

let numeros: Number [];

numeros = [ 5, 1, 3, 4   ]
console.log(numeros);

numeros.push(33);

console.log(numeros);

// tipo Array ; String

let filmes : String [];

filmes = ["A hora da sua Morte" , "Os Incriveis" , "Dance , até o fim" , "faça sua escolha" ];

filmes.push("Hellraiser");


// tipo Array ; Union Type

let series: (String | Number) [] ;

series =["Os Thundermans" , "Henry Danger" , "The Vampire Diares" , "o Gato de Botas" , 80 ];


// Tipo Tuplas ;

let aluno:[ String , Number];

aluno = ["Aluno de Desenvolvimento Mobile" , 30];

// Tipo Objetos ; 


let novoUsuario: Object = {
    id : 1,
    nome: "Xavees",
    Email:"luisfernando1337x@gmail.com" 

}

console.log(novoUsuario);


// tipo Enum ;

enum DesignColors {

    white =" #FFFFFF",
    black = "#0000"



}
console.log (DesignColors.black);

// Null e Undefined


let banana2: null;

banana2 = null;



let nomeUser: undefined

/* Não consegue usar a variavel do tipo undefined, nao da pra atribuir.
 nomeUser = Null */

 console.log(nomeUser);
 console.log(banana2);


 // Tipo Unknown

 let notKnow:unknown = "Adm do Block Strike";

 let notKnowConvert:any = notKnow;

 let notKnowFinal:String = notKnowConvert;

 console.log(notKnowFinal);

 // Type Assertions

 let bestBs:unknown = "Adm Brasileiro de Block Strike";

let bestBS:String = "Guerreiro demais";

bestBS = bestBs as String;

// o as é a afirmação e nesse caso eu estou afirmando que a variavel bestBs é uma String.















