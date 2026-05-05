"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let JoseValdo = {
    id: "1",
    nomefuncionario: "Jose Valdo",
    tempoEmpresa: 14,
    cargo: "Empacotador",
};
function adicionarEmpregado(empregado) {
    console.log(`O funcionario ${empregado.nomefuncionario} com o tempo de empresa ${empregado.tempoEmpresa}, está cadastrado no banco de dados com o id ${empregado.id} e adicionaremos ele na gerencia ? ${empregado.gerencia}`);
}
adicionarEmpregado({ id: "1", nomefuncionario: "Xavees de Oliveira", tempoEmpresa: 30, cargo: "Software Engineriing ", gerencia: true });
