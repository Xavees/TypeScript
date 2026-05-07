abstract class Animal {    
    
public fazerSom():void{
console.log("Som Generico");

}

    }


class Cachorro extends Animal {
    public fazerSom(): void {
        console.log("auau")
    }
}


class Gato extends Animal {
    public fazerSom(): void {
        console.log("Miau")
    }
}


function emitirSom(animal: Animal) {
  animal.fazerSom();
}


emitirSom(new Gato)
emitirSom(new Cachorro)