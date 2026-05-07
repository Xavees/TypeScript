"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class jogador {
    nickname;
    constructor(nickname) {
        this.nickname = nickname;
    }
    escolherPerfil(perfilPlayer) {
        let classeEscolhida = perfilPlayer.classe;
        return "";
    }
    ;
}
class Atirador extends jogador {
    nomeArco;
    constructor(nickname, nomeArco) {
        super(nickname);
        this.nomeArco = nomeArco;
    }
    comecarAtirador() {
    }
}
let x = new Atirador("Xavees", "Banguela");
x.escolherPerfil({ nickName: "Xavees", classe: "Espadachim", genero: "M" });
