type Dinheiro = number | string;
// Usando o type pra criar um parametro pra ser utilizado, é como se eu tivesse criando um tipo primitivo pra utilizar 


function guardarDinheiro(dinheiro:Dinheiro):boolean {

console.log("O seu dinheiro foi guardado");

    return false;
}

guardarDinheiro("300 reais");




// TEM COMO ESPECIFICAR MAIS AINDA, POR EXEMPLO : 

type moedas = "BRL" | "USD" | "EUR" | "BTC"

function investimentos(regiaoMoeda:moedas , valor:Dinheiro ) :void {


console.log(`O valor que irá transferir será de :  ${valor}`);
console.log(`A sua moeda nativa é a ${regiaoMoeda}`)



}





investimentos("BRL" , 200)





