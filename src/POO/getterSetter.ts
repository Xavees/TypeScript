class Escola {
  public readonly id: number;
  private nomeDiretora: string;
  protected nomeEscola: string;

  constructor(id: number, nomeDiretora: string, nomeEscola: string) {
    this.id = id;
    this.nomeDiretora = nomeDiretora;
    this.nomeEscola = nomeEscola;
  }

  public matricularAluno(idAluno: number, nomeAluno: string): void {
    console.log(`O aluno ${nomeAluno} foi matriculado na ${this.nomeEscola}`);
  }

  get diretora(): string {
    return this.nomeDiretora;
  }

  set diretora(nomeDiretora: string) {
    if (nomeDiretora.length < 3) {
      throw new Error("Nome inválido");
    }
    this.nomeDiretora = nomeDiretora;
  }

  get escola(): string {
    return this.nomeEscola;
  }
}