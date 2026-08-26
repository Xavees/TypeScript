
import Calculadora from './exportFunction.js'   

//importando variavel 
import { f as d } from './exportFunction.js';


console.log(d);

// fazer o alias em multiplas 

// basicamente o alias permite que mudamos o nome da variavel
import {a as e, b as f, c as h, d as i} from './exportFunction.js'


console.log(e,f,h,i);


import * as numbers from './exportandoVarios.js'

console.log(numbers);


// importando interfaces


import { Humanos } from './exportFunction.js';


class jogadorFutebol implements Humanos {

    constructor(public nome:string, public idade:number){
        
    }




}