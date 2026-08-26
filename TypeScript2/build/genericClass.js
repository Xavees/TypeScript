// classes genericas / Metodos Genericos
// quando colocamos a classe como um todo como generica, todos os atributos e metodos podem passar e receber o tipo T
// diferentemente quando so colocamos o metodo como generico, limitando que : somente aquele bloco da classe trabalhe como generic.
class Caixa {
    item;
    constructor(item) {
        this.item = item;
    }
    mostrar() {
        return this.item;
    }
}
// diferente de :
class CaixaSemGeneric {
    item;
    constructor(item) {
        this.item = item;
    }
    adicionarItem(nomeItem) {
        console.log(`O item ${nomeItem} foi adicionado ao sucesso! `);
        return nomeItem;
    }
}
export {};
