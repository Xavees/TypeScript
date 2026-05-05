"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restaurante {
    endereco;
    tipoCulinaria;
    idloja;
    nomeProprietario;
    constructor(endereco, tipoCulinaria, idloja, nomeProprietario) {
        this.endereco = endereco;
        this.tipoCulinaria = tipoCulinaria;
        this.idloja = idloja;
        this.nomeProprietario = nomeProprietario;
    }
    fazerPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido ${pedido}`);
        });
        return;
    }
    mudarStatus(statusLoja) {
        if (statusLoja == "ABERTO") {
            console.log("Loja Aberta com sucesso");
        }
        else {
            console.log("Loja fechada com sucesso.");
        }
    }
}
const restaurantedoBahiano = new Restaurante("Rua Pedro Ferrer 190", "Comida Bahiana", 1, "Dilson");
restaurantedoBahiano.fazerPedido(1, "Feijão de Corda");
restaurantedoBahiano.mudarStatus("ABERTO");
