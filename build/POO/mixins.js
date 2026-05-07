"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Arqueiro {
}
class Sniper {
}
function atirar(BaseAtirar) {
    return class extends BaseAtirar {
        atirar() {
            console.log("Atirou!");
        }
    };
}
;
const jogadorAtirador = atirar(Arqueiro);
const jogadorAtirador2 = atirar(Sniper);
