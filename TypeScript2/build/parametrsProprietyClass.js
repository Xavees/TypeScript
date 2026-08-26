// melhora a visualização de codigo e torna mais simples a codagem,, masss. Sinto que também tem a hora certa de usar
// se tiver 400 atributos pra serem construidos, não tanto a pena porque vai tornar o codigo mais confuso ainda.
class ControledeAcesso {
    nome;
    idade;
    horarioTurno;
    id;
    constructor(id, nome, idade, horarioTurno) {
        this.nome = nome;
        this.idade = idade;
        this.horarioTurno = horarioTurno;
        this.id = id;
    }
}
export {};
// Boilerplate é código que você precisa escrever repetidamente para cumprir uma estrutura,
//  mas que não contém muita lógica interessante por si só.
// Parameter Properties reduzem boilerplate; não substituem bom design de classe.
