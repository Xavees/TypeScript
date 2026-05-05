type estado = "ABERTO" | "Fechado";

class Restaurante {
endereco:string
tipoCulinaria:string
idloja:number
nomeProprietario:string

constructor(endereco:string, tipoCulinaria:string , idloja:number , nomeProprietario:string) {

    this.endereco = endereco;
    this.tipoCulinaria = tipoCulinaria;
    this.idloja = idloja;
    this.nomeProprietario = nomeProprietario;


}

fazerPedido(mesa:number, ...pedidos:string[]):void {

    pedidos.map((pedido):void => {
        console.log(`Saindo novo pedido ${pedido}`);

    })


return 
}
mudarStatus(statusLoja:estado):void {

if (statusLoja == "ABERTO") {
    
    console.log("Loja Aberta com sucesso")

}else {
    console.log("Loja fechada com sucesso.")
}


}



}


const restaurantedoBahiano = new Restaurante("Rua Pedro Ferrer 190" , "Comida Bahiana" , 1 , "Dilson");

restaurantedoBahiano.fazerPedido(1, "Feijão de Corda");

restaurantedoBahiano.mudarStatus("ABERTO");