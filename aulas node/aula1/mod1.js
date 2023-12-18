/*const nome = 'Artur';
const sobrenome = "Brandão";

const falaNome = () => {return (`${nome} ${sobrenome}`)};

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.falaNome = falaNome;


console.log(module.exports);*/

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;