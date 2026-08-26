// classes genericas / Metodos Genericos
// quando colocamos a classe como um todo como generica, todos os atributos e metodos podem passar e receber o tipo T
// diferentemente quando so colocamos o metodo como generico, limitando que : somente aquele bloco da classe trabalhe como generic.




class Caixa<T> {
    item: T;

    constructor(item: T) {
        this.item = item;
    }

    mostrar(): T {
        return this.item;
    }
}

// diferente de :

class CaixaSemGeneric {
    item:string;

    constructor(item:string){
        this.item = item;

    }

    adicionarItem<T>(nomeItem:T):T{

        console.log(`O item ${nomeItem} foi adicionado ao sucesso! `)
        return nomeItem

    }





}