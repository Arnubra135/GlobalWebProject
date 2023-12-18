// Praticamente pointer
//arrays
const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);

console.log(numeros[1][2]);

//objetos

const pessoa = {
    nome: 'Artur',
    sobrenome: 'Brandao',
    idade: 22,
    endereco: {
        rua: 'rua 7',
        numero: 247,
    }
};


const {nome, sobrenome} = pessoa;

console.log(nome);