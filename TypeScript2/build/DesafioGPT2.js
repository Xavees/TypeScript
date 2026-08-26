class Motor {
    potencia;
    tipoCombustivel;
    constructor(potencia, tipoCombustivel) {
        this.potencia = potencia;
        this.tipoCombustivel = tipoCombustivel;
    }
}
class Veiculos {
    id;
    modelo;
    ano;
    quilometragem;
    motorVeiculo;
    static qtdVeiculos = 0;
    constructor(id, modelo, ano, quilometragem, motorVeiculo) {
        this.id = id;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.motorVeiculo = motorVeiculo;
        Veiculos.qtdVeiculos++;
    }
    get mostrarQuilometragem() {
        return this.quilometragem;
    }
    set adicionarQuilometragem(km) {
        if (km < 0) {
            console.log("Valor de quilometragem inválido");
            return;
        }
        this.quilometragem += km;
    }
    static get veiculosQtd() {
        return Veiculos.qtdVeiculos;
    }
}
class Viatura extends Veiculos {
    numUnidade;
    maxPoliciais;
    constructor(id, modelo, ano, quilometragem, motorVeiculo, numUnidade, maxPoliciais) {
        super(id, modelo, ano, quilometragem, motorVeiculo);
        this.numUnidade = numUnidade;
        this.maxPoliciais = maxPoliciais;
    }
    operar() {
        console.log("Realizando patrulhamento");
    }
}
class Helicoptero extends Veiculos {
    codigoVoo;
    altitudeMax;
    constructor(id, modelo, ano, quilometragem, motorVeiculo, codigoVoo, altitudeMax) {
        super(id, modelo, ano, quilometragem, motorVeiculo);
        this.codigoVoo = codigoVoo;
        this.altitudeMax = altitudeMax;
    }
    operar() {
        console.log("Realizando suporte aéreo");
    }
}
export {};
