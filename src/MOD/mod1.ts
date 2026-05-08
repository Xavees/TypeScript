export class Pessoa {
    nome:string
    ip:string
    cpf:string

    constructor(nome:string, ip:string,cpf:string){
        this.nome = nome;
        this.ip = ip;
        this.cpf = cpf;
    }

public disparar(){
    console.log(`disparado`);
}



}

export class Carro {
    nomeVeiculo:string
    marcaVeiculo:string


    constructor(nomeVeiculo:string,marcaVeiculo:string) {
        this.nomeVeiculo = nomeVeiculo;
        this.marcaVeiculo = marcaVeiculo;
        
    }


public acelerar(){
    console.log(`VRUUUUUUUUUUUUUUUUUUUUUUM`);

}

}