class Conta {
  readonly id: number;
  private taxaJuros: number;
  public nomeUsuario: string;
  public saldoConta: number;

  constructor(id: number, taxaJuros: number, nomeUsuario: string, saldoConta: number) {
    this.id = id;
    this.taxaJuros = taxaJuros;
    this.nomeUsuario = nomeUsuario;
    this.saldoConta = saldoConta;
  }

  private calcularJuros(valor: number): number {
    return valor * this.taxaJuros;
  }

  public pedirEmprestimo(valorEmprestimo: number): void {
    const juros = this.calcularJuros(valorEmprestimo);
    const total = valorEmprestimo + juros;

    console.log(`Você pediu ${valorEmprestimo} e pagará ${total}`);
  }
}

const usuario1 = new Conta(1,0.5,"Xavees", 300);

usuario1.pedirEmprestimo(100);
