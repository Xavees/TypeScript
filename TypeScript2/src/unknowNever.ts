 //  O tipo unknow é diferente do tipo Any, o Any é qualquer coisa, mas se você for usar metodos baseados em tipos primitivos
 // o tipo Any não permite, pois é qualquer coisa. por exemplo. upperCase de String, o tipo Any não permite
 // mas o tipo unknow sim, apesar de que pode permitir um erro no codigo posteriormente. é uma versão mais flexivel 


 
 function analisarDado(dado: unknown) {

    if (typeof dado === "string") {
        console.log(dado.toUpperCase());
    }

    if (typeof dado === "number") {
        console.log(dado * 2);
    }
}



// o tipo Never é um tipo de retorno de função. Cria um fluxo infinito da função ( ou loop)
// é normalmente utilizado em funçoes de lancçamento de erros
function gerarErro(mensagem: string): never {
    throw new Error(mensagem);
}

// exhaustive checking
type Personagem = "Jill" | "Chris" | "Leon";

let personagem: Personagem;

personagem = "Jill";  // certo
personagem = "Chris"; // certo
personagem = "Leon";  // certo

// personagem = "Wesker"; // error


// função pra tratamento de ERRO
function casoImpossivel(valor: never): never {
    throw new Error(`Caso não tratado: ${valor}`);
}


// função pra selecionar personagens usando never pra evitar ERRO

// a função acima valida a de baixo !



function selecionarPersonagem(personagem: Personagem) {

    switch (personagem) {

        case "Jill":
            return "Você escolheu Jill";

        case "Chris":
            return "Você escolheu Chris";

        case "Leon":
            return "Você escolheu Leon";

        default:
            return casoImpossivel(personagem);
    }
}