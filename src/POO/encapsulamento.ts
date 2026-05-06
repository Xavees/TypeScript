class Usuario {
    public id:number
    
    public idade:number
    public vulgo:string


public constructor(id:number  , idade:number , vulgo:string){
    this.id = id;
    
    this.idade = idade;
    this.vulgo = vulgo;

}

public consumir(quantidade:number , nomeDroga:string):void {
   
console.log( `A quantidade solicitada ${quantidade} , da droga ${nomeDroga}; foi requisitada na central;`)

}

}


class Traficante extends Usuario {
   public tempoTrafico:number
   public indicacao:string

public constructor (id:number, idade:number , vulgo:string, tempoTrafico:number, indicacao:string) {
    super (id, idade , vulgo);
    this.tempoTrafico = tempoTrafico;
    this.indicacao = indicacao; 
}

public consumir(quantidade: number, nomeDroga: string): string {
    console.log(`A quantidade solicitada ${quantidade} , da droga ${nomeDroga}; foi requisitada na central;`)
    return `A quantidade solicitada ${quantidade} , da droga ${nomeDroga}; foi requisitada na central;`
}
public vender(quantidade:number , nomeDroga:string , vulgoCliente:string):string {

    console.log(`a quantidade ${quantidade},  solicitada pelo cliente ${vulgoCliente} da droga ${nomeDroga} foi vendida com sucesso`)
    return `a quantidade ${quantidade},  solicitada pelo cliente ${vulgoCliente} da droga ${nomeDroga} foi vendida com sucesso`

}






}




let gustavoUsuario = new Usuario(1 , 17, "Gustavin");
gustavoUsuario.consumir(30,"Cocaina");

let heitorTraficante = new Traficante(1,18,"Fiote",1,"José beca");
heitorTraficante.vender(20,"Cocaina","gustavoUsuario");



