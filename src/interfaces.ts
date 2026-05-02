let loja :object

interface iLoja {
    nome : String;
    filal : String;
    Rua : String;
    status : Boolean;
    
    }

const burguerXavees : iLoja = {
    nome:"Burguer Xavees",
    filal:"Burguer King",
    Rua:"Pedro Ferrer , 65",
    status:true
}
console.log (burguerXavees)


function criarLoja({nome,filal,Rua,status}:iLoja) :void {
    console.log(`o nome da loja é ${nome}`);
    console.log(`a loja é filiada á ${filal}`);
    console.log(`a loja fica na rua ${Rua}`);
    console.log(status);

}
criarLoja({nome: "Mac Xavees" , filal:"Mc Donalds" , Rua: "Rua Pedro Ferrer" , status : true });

// Interfaces é basicamente criar uma maneira de definir as estruturas de um objeto, tornando assim o sistema mais compacto e seguro :D
