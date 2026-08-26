class Motor {
    constructor( public potencia: number,public tipoCombustivel: string
    ) {}
}


abstract class Veiculos {
    private static qtdVeiculos: number = 0;

    constructor(public readonly id: number,public modelo: string,public ano: number,private quilometragem: number,public motorVeiculo: Motor) {
        Veiculos.qtdVeiculos++;
    }

    get mostrarQuilometragem(): number {
        return this.quilometragem;
    }

    set adicionarQuilometragem(km: number) {
        if (km < 0) {
            console.log("Valor de quilometragem inválido");
            return;
        }

        this.quilometragem += km;
    }

    abstract operar(): void;

    static get veiculosQtd(): number {
        return Veiculos.qtdVeiculos;
    }
}


class Viatura extends Veiculos {
    constructor(id: number, modelo: string,ano: number,quilometragem: number, motorVeiculo: Motor, public numUnidade: number,   public maxPoliciais: number) {
        super(id,modelo,ano, quilometragem, motorVeiculo)                                                                                                    }

    operar(): void {
        console.log("Realizando patrulhamento");
    }
}


class Helicoptero extends Veiculos {
    constructor(id: number,modelo: string,ano: number,quilometragem: number,motorVeiculo: Motor,public codigoVoo: number,  public altitudeMax: number
    ) {
        super( id,modelo,ano,quilometragem,motorVeiculo);
    }

    operar(): void {
        console.log("Realizando suporte aéreo");
    }
}