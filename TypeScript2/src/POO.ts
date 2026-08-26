// uma pequena revisao de Programação Orientada a Objetos em TS.
class PolicialRPD {
    readonly id: number;
    public nome: string;
    public idade: number;
    public tempoTreinamento: number;

    constructor(
        id: number,
        nome: string,
        idade: number,
        tempoTreinamento: number
    ) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.tempoTreinamento = tempoTreinamento;
    }

    serPromovido(): void {
        if (this.tempoTreinamento >= 10) {
            console.log(
                `${this.nome} poderá realizar os testes de promoção.`
            );
        } else {
            console.log(
                `${this.nome} precisa de mais tempo de treinamento.`
            );
        }
    }
}


class AgenteBSAA extends PolicialRPD {
    readonly idGoverno: number;

    public nomeSecreto: string;
    public localMissao: string;
    public tempoCarreira: number;

    constructor(
        id: number,
        nome: string,
        idade: number,
        tempoTreinamento: number,
        idGoverno: number,
        nomeSecreto: string,
        localMissao: string,
        tempoCarreira: number
    ) {
        super(
            id,
            nome,
            idade,
            tempoTreinamento
        );

        this.idGoverno = idGoverno;
        this.nomeSecreto = nomeSecreto;
        this.localMissao = localMissao;
        this.tempoCarreira = tempoCarreira;
    }

    executarMissao(): void {
        console.log(
            `${this.nomeSecreto} executou a missão em ${this.localMissao} com sucesso.`
        );
    }
}


const jill = new PolicialRPD(
    1,
    "Jill Valentine",
    23,
    12
);

jill.serPromovido();



const chris = new AgenteBSAA(
    2,
    "Chris Redfield",
    25,
    15,
    1001,
    "Alpha",
    "Europa",
    8
);

chris.serPromovido();
chris.executarMissao();