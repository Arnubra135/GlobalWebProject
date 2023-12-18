

/*const frutas = ['maçã', 'banana', 'pera']


for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}*/

/*const container = document.querySelector('.container');
const div = document.createElement('div');





const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);*/

//for in

const frutas = ['maçã', 'banana', 'uva'];
const pessoa = {
    nome: 'Bidu',
    sobrenome: 'Brandao',
    idade: 22
};
// dor in lê os indices do array ou objeto

for(let indice in frutas){
    console.log(indice);
};

for(chave in pessoa){
    console.log(chave);
};

for(i in frutas){
    console.log(frutas[i]);
}

//for of
//for of retorna diretamente o valor da variável

const nome = 'Artur Nunes Brandao';

for(let valor of nome){
    console.log(valor);
}

//é o mesmo que fazer for in lendo o indice

for(let i in nome){
    console.log(nome[i]);
}




