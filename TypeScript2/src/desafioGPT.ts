abstract class Funcionarios{
    private static qtdFuncionarios:number = 0;
    constructor(public readonly id:number, public name:string, protected salario:number, public cargo:string, ){

    }


    abstract trabalhar():void 

    registrarFuncionario(nome:string,cargo:string):string{

        Funcionarios.qtdFuncionarios++

        return `O funcionario ${nome}, que tem o cargo ${cargo} foi registrado com sucesso!`  

       
       
     


    }




    static get funcionariosQTD():number{


        return this.qtdFuncionarios;
    }

        public alterarValor(novoSalario:number):number{
                this.salario = novoSalario           
            return novoSalario;
        }

}


 class Desenvolvedor extends Funcionarios{

    constructor(id:number,name:string, salario:number, cargo:string){
        super(id,name,salario,cargo)
        }


    trabalhar(): void {
        console.log("O desenvolvedor está trabalhando")
    }






}



class Gerente extends Funcionarios{
    constructor(id:number,name:string, salario:number, cargo:string){
        super(id,name,salario,cargo)
        }


        trabalhar(): void {
        console.log("O gerente está monitorando a situações dos setores");
    }


    alterarSalario(funcionario:Funcionarios, novoSalario:number):void{
        funcionario.alterarValor(novoSalario);






    }

}




class Suporte extends Funcionarios {
     constructor(id:number,name:string, salario:number, cargo:string){
        super(id,name,salario,cargo)
        }

 trabalhar(): void {
        console.log("Verificando usuarios que precisam de apoio!");

    }




}