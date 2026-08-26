class Pessoa {
    nome;
    sonho;
    id;
    constructor(id, nome, sonho) {
        this.nome = nome;
        this.sonho = sonho;
        this.id = id;
    }
}
class Medico extends Pessoa {
    trabalhar(sonho) {
        console.log(`Trabalhando de ${sonho}`);
    }
}
export {};
/*
CLASSES E MÉTODOS ABSTRATOS

- Classes abstratas não podem ser instanciadas diretamente.
- Elas servem como uma BASE para outras classes através da herança.
- São úteis quando temos uma classe mais generalizada que possui
  características em comum entre várias classes.

- Uma classe abstrata pode possuir atributos e métodos normais,
  além de métodos abstratos.

- Métodos abstratos NÃO possuem implementação na classe abstrata.
  Eles apenas definem um CONTRATO/OBRIGAÇÃO para as classes filhas.

- Quando uma classe concreta usa extends em uma classe abstrata,
  ela é obrigada a IMPLEMENTAR os métodos abstratos.

RESUMINDO:

Classe abstrata = BASE que não pode ser instanciada.

Método abstrato = define O QUE as classes filhas precisam fazer,
mas deixa cada classe filha decidir COMO fazer.
*/
