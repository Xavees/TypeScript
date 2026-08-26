type Arma = {
    nome:string
    dano:number

}

// criei um tipo imaginando um cenario em que o usuario precisa ter algum item da interface como obrigatorio, mas os outros variam
// pensando em cenarios em que temos algo fixo, só que os outros itens variam
// é assim que eu posso fazer



interface Inventario<T> {
    arma:Arma
   
   
   itens: {
 
    [itens:string]:T

   }
}


// criando uma variavel que rcebe esse tipo interface pra teste

const inventarioJill: Inventario<number> = {
    arma: {
        nome: "Samurai Edge",
        dano: 40
    },

    itens: {
        municao: 30,
        ervaVerde: 2,
        granada: 3
    }
};





