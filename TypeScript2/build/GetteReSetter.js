/*
GETTER E SETTER

São usados para controlar o acesso aos dados de uma classe,
sendo muito úteis no ENCAPSULAMENTO de atributos privados.

GET (Getter):
- Usado para LEITURA de um valor.
- Pode acessar um atributo private e retornar seu valor.
- Pode formatar ou calcular o valor antes de retorná-lo.
- É acessado como uma propriedade, SEM ().

SET (Setter):
- Usado para ALTERAÇÃO de um valor.
- Permite modificar um atributo private de forma CONTROLADA.
- Pode VALIDAR o novo valor antes de alterar o atributo.
- É utilizado como uma atribuição: objeto.propriedade = valor.

RESUMINDO:

private = protege o dado
get     = controla a LEITURA
set     = controla a ALTERAÇÃO

GETTER + SETTER = ENCAPSULAMENTO / CONTROLE DE ACESSO
*/
class Atendente {
    nomeFuncionario;
    cpfFuncionario;
    salarioFuncionario;
    constructor(nomeFuncionario, cpfFuncionario, salarioFuncionario) {
        this.nomeFuncionario = nomeFuncionario;
        this.cpfFuncionario = cpfFuncionario;
        this.salarioFuncionario = salarioFuncionario;
    }
    get mostrarCPF() {
        return this.cpfFuncionario;
    }
    set mudarSalario(valorSalario) {
        this.salarioFuncionario = valorSalario;
    }
    trabalhar() {
    }
}
export {};
