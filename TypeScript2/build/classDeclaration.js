/*
CLASS EXPRESSIONS

Permitem criar uma classe como uma EXPRESSÃO,
podendo armazená-la em uma variável.

Normal:
class Pessoa {}

Class Expression:
const Pessoa = class {};

É semelhante à diferença entre:

function teste() {}

e:

const teste = function() {};

Classes podem ser tratadas como VALORES,
podendo ser armazenadas, passadas ou retornadas.

No uso comum, class declarations são mais frequentes.
*/
const modoDificil = true;
const Inimigo = modoDificil
    ? class {
        dano = 100;
    }
    : class {
        dano = 30;
    };
export {};
