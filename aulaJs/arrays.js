//Arrays são conjuntos de variaveis e são definidos ao colocar uma lista de itens entre []. Ex.: ['joao', 'maria', 'jose'] 

//            01234567891011
//const nome = 'Artur Brandão';

//                0        1       2
//const alunos = ['Joao', 'Maria', 'Jose'];
//alunos[0] = 'Artur';
//alunos.push('bidu', 'bilulu');

//console.log(alunos);

//function saudacao(nome){
//    console.log('Boa noite, ' + nome);
//}

//saudacao('Bruno!')

//function raiz(numRaiz){
//    if  (numRaiz > 0){
//       return numRaiz ** 0.5;
//    }
//    else{
//        return 'Valor inválido!'
//    }
//}

// console.log(raiz(-15));

/*function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Artur', 'Brandao', 22);

console.log(pessoa1);*/


/*const num1 = 10;
const num2 = '10';
const comparacao = num1 === num2;
console.log(comparacao)
*/

const numeros = [5, 50, 80, 1, 2 , 3 , 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valorAtual) => ac + valorAtual);


console.log(numerosPares);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach(value => console.log(value));

