/*
STATIC

Define propriedades ou métodos que pertencem à CLASSE,
e não individualmente às suas INSTÂNCIAS.

Normal:
objeto.propriedade
objeto.metodo()

Static:
Classe.propriedade
Classe.metodo()

Exemplo:
AgenteBSAA.totalAgentes

Usos comuns:
- Contadores compartilhados
- Configurações da classe
- Constantes
- Métodos utilitários
- Informações compartilhadas entre todas as instâncias

REGRA:
normal → pertence ao OBJETO
static → pertence à CLASSE
*/

class Vendas {
    readonly idProduto:number;
    private static quantidadeVendas:number;

    constructor(idProduto:number){
        this.idProduto = idProduto;
        Vendas.quantidadeVendas++;

    }

 static get qtdVendas():number{
   return Vendas.quantidadeVendas;


 }







}





