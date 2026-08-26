//O símbolo @ apenas indica que aquela função será usada como decorator.


/* @registrar
class Usuario {
    nome:string = "Luis"
}

*/

// Decorators podem adicionar funcionalidades extras a classes e funçoes
// basicamente criamos novas funçoes que sao adicionadas a partir de um  @nomeFunçao
// essa função será chamada assim que o item que foi definido o decorator for executado;;
// para habilitar necessistamos adicionar uma config no tsconfig.json

// Decorators em Metodo : Introdução da Sintaxe
// comecei pelo de Metodo por ser mais simples,


function myDecorator(){
    console.log("Iniciando Decorator")

    return function (target:any, propertKey:string, descriptor:PropertyDescriptor){
         console.log ("executando decorator")
         console.log(target);  // onde o metodo está localizado
         console.log(propertKey); // nome do metodo decorado
         console.log(descriptor); // infos do metodo decorado
        
    }
}




class Usuario {

@myDecorator()
    teste(){
        console.log("Testando Decorator;")
    }




}







let pessoa = new Usuario;

pessoa.teste()

// multiplos decorators


function a ():Function{
    console.log("Executando Decorator")
    return function(target:any, propertKey:string, descriptor:PropertyDescriptor){
        console.log('Executou A');

    }
}

class multiplosDecorators{

    @a()
    testing(){

    }


}
    
