class Loja{
    nomeLoja:string
    idloja:number
    nomeProprietario:string

constructor(nomeLoja:string , idloja:number , nomeProprietario:string) {

    this.nomeLoja = nomeLoja;
    this.idloja = idloja;
    this.nomeProprietario = nomeProprietario;



}

adicionarLoja():void{
    console.log("Loja Adicionada com Sucesso.")


}

emitirPedidos(mesa:number , pedido:string):void {
    console.log(`a mesa numero : ${mesa} vai receber o pedido ${pedido} na loja ${this.nomeLoja}`);


}



}


const loja = new Loja("Loja do josè" ,  1 , "Xavees");


loja.emitirPedidos(13,"Lasanha");