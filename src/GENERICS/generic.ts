// Duas classes diferentes
class Usuario {
  constructor(
    public id: number,
    public nome: string,
    public email: string
  ) {}
}

class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number
  ) {}
}

// Interface para garantir que qualquer coisa tenha id
interface EntidadeComId {
  id: number;
}

// Classe genérica
// T pode ser Usuario, Produto ou qualquer classe que tenha id
class Repositorio<T extends EntidadeComId> {
  private itens: T[] = [];

  adicionar(item: T): void {
    this.itens.push(item);
  }

  listar(): T[] {
    return this.itens;
  }

  buscarPorId(id: number): T | undefined {
    return this.itens.find(item => item.id === id);
  }

  removerPorId(id: number): void {
    this.itens = this.itens.filter(item => item.id !== id);
  }
}

// Repositório de usuários
const repositorioUsuarios = new Repositorio<Usuario>();

repositorioUsuarios.adicionar(
  new Usuario(1, "Xavees", "xavees@email.com")
);

repositorioUsuarios.adicionar(
  new Usuario(2, "Apollo", "apollo@email.com")
);

console.log(repositorioUsuarios.listar());

console.log(repositorioUsuarios.buscarPorId(1));

// Repositório de produtos
const repositorioProdutos = new Repositorio<Produto>();

repositorioProdutos.adicionar(
  new Produto(1, "Notebook", 2500)
);

repositorioProdutos.adicionar(
  new Produto(2, "Mouse", 80)
);

console.log(repositorioProdutos.listar());

console.log(repositorioProdutos.buscarPorId(2));


class Dicionario<K, V> {

    chave: K;
    valor: V;

    constructor(chave: K, valor: V) {
        this.chave = chave;
        this.valor = valor;
    }

}