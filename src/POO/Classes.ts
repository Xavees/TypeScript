class Loja {
    nomeLoja: string;
    estadoLoja: boolean;
    nomeProprietario:string;


constructor (nomeLoja:string , estadoLoja:boolean , nomeProprietario:string) {

        this.nomeLoja = nomeLoja;
        this.estadoLoja = estadoLoja;
        this.nomeProprietario = nomeProprietario;


}
};

function adicionarLoja(addLoja:Loja):void {

console.log(`Adicionamos a loja ${addLoja.nomeLoja} que está com o estado ${addLoja.estadoLoja} do dono ${addLoja.nomeProprietario}`);


}



adicionarLoja({nomeLoja : "Xavees Burguer" , estadoLoja : true , nomeProprietario: "Xavees"});