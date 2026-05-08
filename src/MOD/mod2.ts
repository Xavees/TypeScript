import { Pessoa, Carro } from './mod1';


let pessoa1 = new Pessoa("Xavees", "123.456.789.10" , "123.456.789-10");

console.log("Testando os modulos em  typeScript :D")

console.log(pessoa1.nome + pessoa1.cpf + pessoa1.ip)
pessoa1.disparar();


let carro2 = new Carro("UNO", "FIAT");

carro2.acelerar();