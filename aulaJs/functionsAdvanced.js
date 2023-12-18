// Function é um objeto de primeira classe (tratada como um dado)
//outra forma de declara função

/*const souUmDado = function (){
    console.log('Sou um dado');
}

function functionExecuter(funcao){
    funcao();
}

functionExecuter(souUmDado);

//Arrow function

const functionArrow = () => {console.log('Sou uma arrow')}

functionArrow();

//Dentro de um objeto

const conversar = {
    falar: function(){
        console.log('Estou falando...')
    },
    cochichar(){
        console.log('Estou cochichando...')
    },
}

conversar.cochichar();*/

// argumentos
function funcao(){
    console.log(arguments[4]); // arguments supre os parametros mesmo sem pedí-los. 
}

funcao('valor', 1, 2, 3, 4, 5, 6, 7);

function soma(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    };
    console.log(total);
}
soma(1, 2, 3, 4, 5, 6, 7, 8);

function padrao(a, b = 2, c = 4){
    console.log(a + b + c);
}
 
//foi enciado apenas o parametro de a, porém como foi setado o valor padrão para b e c, a função é executada com esses valores padrão, e caso o parametro seja enviado, o valor padrão é substituido
//caso queira pular o valor padrao sem utilizá-lo basta usar 'undefined' no, lugar do parametro
padrao(2, undefined, 10);

function pessoa({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'artur', sobrenome: 'brandao', idade: 22};
pessoa(obj);

function array([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

array(['Artur','Brandao', 22]);

//Rest operator '...parametro'

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        switch (operador){
            case '+': acumulador += numero;
            break;
            case '-': acumulador -= numero;
            break;
            case '*': acumulador *= numero;
            break;
            case '/': acumulador /= numero;
            break;
        }
    }
    console.log(acumulador);
}
conta('/', 1 , 10, 20, 30, 40, 50)

//Escopo lexico eh o universo onde sencontra a função, a função em JS tem acesso a todos os escopos pais.
//Closure como é traduzido, mostra o finalmente, quando não irá mudar mais
//Ex.
function criaFuncao(nome){
    return function(){
        return nome;
    }
}

const func1 = criaFuncao('Artur'); //Artur é o closure.
const func2 = criaFuncao('Bidu'); // Bidu é o closure.

//Ambas variáveis derivam da mesma função criaFuncao, porém podem ter infinitos closures.

console.log(func1()); 
console.log(func2()); 









