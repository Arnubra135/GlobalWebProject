//let num1 = 9.78324;
//Math.floor arredonda pra baixo
//Math.round arredonda para o mais prox
//Math.random gera numeros aletórios entre 0 e 1 e nunca pega o 1. INTERESSANTE!!! PODE SER BEM UTILIZADO!!
//let num2 = Math.ceil(num1);
//console.log(num2);


const numRecebido = prompt('Insira um número:');
const numeroTrabalhado = document.getElementById('numero');
const textoDiv = document.getElementById('texto');

numeroTrabalhado.innerHTML = numRecebido;
textoDiv.innerHTML = `<p>A raiz quadrada do seu número é: ${numRecebido ** 0.5}</p>`;
textoDiv.innerHTML = `<p>${numRecebido} é inteiro: ${Number.isInteger(numRecebido)}</p>`;


