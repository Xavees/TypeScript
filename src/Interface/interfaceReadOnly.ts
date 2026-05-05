interface produtosLojas {
    readonly id:string,
    nomeProduto:string,
    lojaRequisitora:string
    estoque:boolean
}


let conjuntoTenis:produtosLojas =  {
    id: "1",
 nomeProduto: "Tênis",
 lojaRequisitora: "Adidas",
 estoque:true

}

function adicionarTenis(adicionarTenis:produtosLojas): void {

    console.log(`O Produto ${conjuntoTenis.nomeProduto} com o id ${conjuntoTenis.id} foi adicionado ao estoque ${conjuntoTenis.estoque} pela requisitora ${conjuntoTenis.lojaRequisitora}`)


}

adicionarTenis({id : "1", nomeProduto:"Tenis" , lojaRequisitora:"Adidas" , estoque:true });