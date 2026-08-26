//Override é quando uma classe filha sobrescreve um método herdado da classe pai para fornecer seu próprio comportamento.
// a gente permite que a mesma ação tenha comportamento diferente.

class Pessoa {
    dataNasc:number;
    nome:string;


    constructor(dataNasc:number,nome:string){
        this.dataNasc = dataNasc;
        this.nome = nome;

    }

    trabalhar(){
        console.log("Essa pessoa trabalha normalmente;")

    }








}


class Empresario extends Pessoa {
    nomeEmpresa:string;




constructor(dataNasc:number, nome:string, nomeEmpresa:string) {
    super(dataNasc,nome) 
    this.nomeEmpresa = nomeEmpresa;
}

    

override trabalhar():void{
    console.log("Nem trabalha fi, ce so tem que pegar o lucro e demitir alguem caso não de lucro");
}









}
