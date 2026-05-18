"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Duas classes diferentes
class Usuario {
    id;
    nome;
    email;
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Produto {
    id;
    nome;
    preco;
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
// Classe genérica
// T pode ser Usuario, Produto ou qualquer classe que tenha id
class Repositorio {
    itens = [];
    adicionar(item) {
        this.itens.push(item);
    }
    listar() {
        return this.itens;
    }
    buscarPorId(id) {
        return this.itens.find(item => item.id === id);
    }
    removerPorId(id) {
        this.itens = this.itens.filter(item => item.id !== id);
    }
}
// Repositório de usuários
const repositorioUsuarios = new Repositorio();
repositorioUsuarios.adicionar(new Usuario(1, "Xavees", "xavees@email.com"));
repositorioUsuarios.adicionar(new Usuario(2, "Apollo", "apollo@email.com"));
console.log(repositorioUsuarios.listar());
console.log(repositorioUsuarios.buscarPorId(1));
// Repositório de produtos
const repositorioProdutos = new Repositorio();
repositorioProdutos.adicionar(new Produto(1, "Notebook", 2500));
repositorioProdutos.adicionar(new Produto(2, "Mouse", 80));
console.log(repositorioProdutos.listar());
console.log(repositorioProdutos.buscarPorId(2));
class Dicionario {
    chave;
    valor;
    constructor(chave, valor) {
        this.chave = chave;
        this.valor = valor;
    }
}
