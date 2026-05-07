"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// essa função pode estar dentro do próprio objeto;
function mostrarPromocao(preco) {
    console.log(`a promoção é de ${preco}`);
}
const novosCursos = {
    id: 1,
    nomeCurso: "Matemagicamente",
    preco: 200,
    promocao: mostrarPromocao // a função poderia estar aqui
};
console.log(novosCursos);
console.log(novosCursos.promocao);
const somaNumero = (valor1, valor2) => {
    console.log(`o resultado dessa soma é` + valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumero(15, 10);
