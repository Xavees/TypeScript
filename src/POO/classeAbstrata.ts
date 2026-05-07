abstract class jogador {
public nickname:string

constructor(nickname:string){
    this.nickname = nickname;
}




public escolherPerfil(perfilPlayer:categoria):string{

 let classeEscolhida = perfilPlayer.classe;

return "";
};

}
type genero = "f" | "F" | "M" | "M"
type classe = "Atirador" | "Espadachim" | "Arqueiro" | "Mago" | "Curandeiro"
type categoria = {
    nickName:string,
    classe:classe
    genero:genero





    
}





class Atirador extends jogador {

nomeArco:string

 public constructor(nickname:string , nomeArco:string){
    super(nickname)
    this.nomeArco = nomeArco;
}


public comecarAtirador() {
    
}



}

let x = new Atirador("Xavees" , "Banguela");

x.escolherPerfil({nickName:"Xavees" , classe: "Espadachim", genero:"M" });