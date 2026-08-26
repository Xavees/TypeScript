class Funcionarios {
    id;
    name;
    salario;
    cargo;
    static qtdFuncionarios = 0;
    constructor(id, name, salario, cargo) {
        this.id = id;
        this.name = name;
        this.salario = salario;
        this.cargo = cargo;
    }
    registrarFuncionario(nome, cargo) {
        Funcionarios.qtdFuncionarios++;
        return `O funcionario ${nome}, que tem o cargo ${cargo} foi registrado com sucesso!`;
    }
    static get funcionariosQTD() {
        return this.qtdFuncionarios;
    }
    alterarValor(novoSalario) {
        this.salario = novoSalario;
        return novoSalario;
    }
}
class Desenvolvedor extends Funcionarios {
    constructor(id, name, salario, cargo) {
        super(id, name, salario, cargo);
    }
    trabalhar() {
        console.log("O desenvolvedor está trabalhando");
    }
}
class Gerente extends Funcionarios {
    constructor(id, name, salario, cargo) {
        super(id, name, salario, cargo);
    }
    trabalhar() {
        console.log("O gerente está monitorando a situações dos setores");
    }
    alterarSalario(funcionario, novoSalario) {
        funcionario.alterarValor(novoSalario);
    }
}
class Suporte extends Funcionarios {
    constructor(id, name, salario, cargo) {
        super(id, name, salario, cargo);
    }
    trabalhar() {
        console.log("Verificando usuarios que precisam de apoio!");
    }
}
export {};
