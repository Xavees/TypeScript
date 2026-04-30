# 📘 Curso de TypeScript

## 📌 Sobre o Projeto
Este repositório contém meus estudos de TypeScript, abordando desde conceitos básicos até tópicos mais avançados.

O objetivo é consolidar conhecimento em tipagem estática, boas práticas e desenvolvimento mais seguro com JavaScript moderno.

---

## 🎯 Objetivos
- Aprender os fundamentos do TypeScript  
- Entender tipagem estática na prática  
- Aplicar conceitos em pequenos projetos  
- Preparar base para desenvolvimento back-end  

---

## 🧠 Conteúdo Estudado

### 🔰 Fundamentos
- Tipos primitivos (`string`, `number`, `boolean`)
- Arrays e Tuplas
- `any`, `unknown`, `void`

### 🔍 Inferência de Tipos
- Type Inference  
- Tipagem implícita vs explícita  

### 🧩 Funções
- Tipagem de parâmetros  
- Tipagem de retorno  
- Funções anônimas  

### 🏗️ Estruturas
- Interfaces  
- Types  
- Enums  

### 🧱 Programação Orientada a Objetos
- Classes  
- Herança  
- Encapsulamento  

### ⚙️ Avançado
- Generics  
- Union Types  
- Intersection Types  
- Type Guards  

---

## 📁 Estrutura do Projeto

```
/curso-typescript
 ├── src/    # Código em TypeScript
 ├── build/  # Código compilado em JavaScript
 ├── tsconfig.json
 └── package.json
```

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Xavees/TypeScript.git
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar em modo desenvolvimento
```bash
npm run dev
```

### 4. Build do projeto
```bash
npm run build
```

---

## ⚙️ Configuração

Arquivo principal de configuração:

```
tsconfig.json
```

Configuração recomendada:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./build"
  }
}
```

---

## 💻 Exemplos

### Tipagem básica
```ts
let nome: string = "Xavees";
let idade: number = 18;
```

### Interface
```ts
interface Usuario {
  nome: string;
  idade: number;
}
```

### Função
```ts
function soma(a: number, b: number): number {
  return a + b;
}
```

---

## 📚 Aprendizados
Durante esse curso, desenvolvi:
- Melhor organização de código  
- Redução de erros com tipagem  
- Base sólida para projetos maiores  
- Evolução no raciocínio lógico  

---

## 🚧 Status
📍 Em andamento  

---

## 🤝 Contribuição
Este é um projeto de estudo pessoal, mas sugestões são sempre bem-vindas.

---

## 📄 Licença
Este projeto está sob a licença MIT.
