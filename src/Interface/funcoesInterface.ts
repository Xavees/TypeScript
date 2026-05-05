interface cadastroCursos {
    id: number
    nomeCurso : string
    preco : number

    promocao?: (preco:number) => void;
}
// essa função pode estar dentro do próprio objeto;
function mostrarPromocao(preco:number):void {

console.log(`a promoção é de ${preco}`);


}

const novosCursos: cadastroCursos = {
    id: 1,
    nomeCurso: "Matemagicamente",
    preco: 200,
    promocao: mostrarPromocao // a função poderia estar aqui

}

console.log(novosCursos);
console.log(novosCursos.promocao);



interface interSoma {
    (valor1:number , valor2:number):number;
}

const somaNumero:interSoma = (valor1:number , valor2:number):number  => {
    console.log(`o resultado dessa soma é` + valor1 + valor2)

    return valor1 + valor2;



}

const resultado = somaNumero (15,10);