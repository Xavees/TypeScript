// exercicio proposto pelo GPT
const pistola = {
    nome: "G19 Handgun",
    dano: 35
};
const shotgun = {
    nome: "M3 Shotgun",
    dano: 80
};
const jill = {
    nome: "Jill Valentine",
    armaFavorita: pistola
};
function equiparItem(item) {
    return item;
}
// Testes
const arma1 = equiparItem(pistola);
const arma2 = equiparItem(shotgun);
const personagem = equiparItem(jill);
console.log(arma1.nome);
console.log(arma2.dano);
console.log(personagem.nome);
// Generic Function Especificando argumento
function matarUsuario(usuario, item) {
    console.log("Assasinato registrado de : ");
    return usuario;
}
console.log(matarUsuario("Ada", "Arma"));
// parametros default
function registrarUser(idade, usuario = "user001", id) {
    return "O usuario foi registrado com sucesso";
}
export {};
// OBRIGATÓRIOS → DEFAULT → OPCIONAL
// ordem de parametros :D
