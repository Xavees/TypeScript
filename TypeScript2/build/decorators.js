//O símbolo @ apenas indica que aquela função será usada como decorator.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function myDecorator() {
    console.log("Iniciando Decorator");
    return function (target, propertKey, descriptor) {
        console.log("executando decorator");
        console.log(target); // onde o metodo está localizado
        console.log(propertKey); // nome do metodo decorado
        console.log(descriptor); // infos do metodo decorado
    };
}
class Usuario {
    teste() {
        console.log("Testando Decorator;");
    }
}
__decorate([
    myDecorator()
], Usuario.prototype, "teste", null);
let pessoa = new Usuario;
pessoa.teste();
export {};
