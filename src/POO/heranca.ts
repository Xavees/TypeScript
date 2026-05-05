class Funcionario {
    nomeFuncionario:string
 
    tempoEmpresa:number
    setorAtual:string

    constructor(nomeFuncionario:string , tempoEmpresa:number , setorAtual:string) {
        this.nomeFuncionario = nomeFuncionario;
        this.tempoEmpresa = tempoEmpresa;
        this.setorAtual = setorAtual;
    }

baterPonto(horario:string):boolean {

    console.log(`o Ponto do funcionario ${this.nomeFuncionario} foi batido no ${horario}`);
return true;

}






}

class gerenteSetor extends Funcionario {

    tempoSetor:number

constructor  (nomeFuncionario:string , tempoEmpresa:number , setorAtual:string , tempoSetor:number) {
    // chamando o construtor da classe pai  
    super(nomeFuncionario, tempoEmpresa , setorAtual);

 this.tempoSetor = tempoSetor;

}



}


const gerenteSuper = new gerenteSetor("Xavees" , 4 , "Desenvolvimento de Software " , 5)

console.log(gerenteSuper
)
