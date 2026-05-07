class Arqueiro {





}



class Sniper {


}


function atirar(BaseAtirar:any){

    return class extends BaseAtirar {

        atirar(){
            console.log("Atirou!")
        }


    }

};



const jogadorAtirador = atirar(Arqueiro);
const jogadorAtirador2 = atirar(Sniper);