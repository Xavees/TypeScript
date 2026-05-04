interface funcionario {
    readonly id:string
    nomefuncionario:string
    tempoEmpresa?:number
    cargo:string
}

interface gerente extends funcionario {
    gerencia:boolean

};



let  JoseValdo:funcionario = {
   
    id:"1",
    nomefuncionario:"Jose Valdo",
    tempoEmpresa : 14,
    cargo:"Empacotador",

}


function adicionarEmpregado(empregado:gerente) {

    console.log(`O funcionario ${empregado.nomefuncionario} com o tempo de empresa ${empregado.tempoEmpresa}, está cadastrado no banco de dados com o id ${empregado.id} e adicionaremos ele na gerencia ? ${empregado.gerencia}`);



}

adicionarEmpregado({id:"1", nomefuncionario: "Xavees de Oliveira" , tempoEmpresa: 30 , cargo : "Software Engineriing " , gerencia : true});