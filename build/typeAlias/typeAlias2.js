"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoAparelho = {
    processador: "AMD",
    placaVideo: "NVIDIA",
    nomeAparelho: "Redmi Note 31s",
    nomeMarca: "Xiaomi",
    anoLancamento: 2033
};
function receberAparelho(aparelhoRecebido) {
    console.log(`O seu aparelho ${aparelhoRecebido.nomeAparelho} é da marca ${aparelhoRecebido.nomeMarca} , tem o processador ${aparelhoRecebido.processador} a placa de video ${aparelhoRecebido.placaVideo} e foi lançado no ano de ${aparelhoRecebido.anoLancamento}`);
    return true;
}
receberAparelho({
    processador: "AMD",
    placaVideo: "NVIDIA",
    nomeAparelho: "Redmi Note 32s",
    nomeMarca: "Xiaomi",
    anoLancamento: 2033
});
