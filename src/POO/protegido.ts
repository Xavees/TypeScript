class Membro {
    public id:number
    public nome:string
    public idade:number

constructor(id:number, nome:string , idade:number) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
}

protected solicitarRevisao(nomeSuspeito:string, nomeAdmin:string , motivo:string):void {
    console.log(`O membro ${this.nome} , solicitou a revisâo do usuario ${nomeSuspeito} pro admin ${nomeAdmin} pelo motivo ${motivo}`);
    
}

public postarAlgo(midiaPost:string , nomeUsuario:string, ):void{
    console.log(`o seu post foi postado com sucesso`)
}
}



class admin extends Membro {
    public tempoAdm:number
    
 constructor(id:number, nome:string , idade:number , tempoAdm:number){
    super(id , nome , idade);
    this.tempoAdm = tempoAdm;


 }

 protected removerUser(userRemovido:string , motivo:string):void {
    console.log(`o user ${userRemovido} foi removido pelo admin ${this.nome} pelo motivo : ${motivo}`);
 }
 

}


class testeProtegido {
    public nomeTeste:string

    constructor(nomeTeste:string){
        this.nomeTeste = nomeTeste;
    }
}








 // nao consigo usar o metodo protegido, pq eu to instanciando e assim usando o metodo fora da classe. 
let pedrowski = new Membro(1,"Pedro",22);
pedrowski
pedrowski.postarAlgo("O post de hoje é sobre breinrot", "pedrowski");


