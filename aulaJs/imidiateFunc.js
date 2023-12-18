// IIFE -> Immediately invoked function expression - Funções que "fogem do escopo global"
// são funções anonimas que são executadas na hora

(function(idade, peso, altura){
    const nome = "artur"; // não toca o escopo global e não interfere no código
    console.log(nome);
    console.log(idade, peso, altura)
})(22, 77, 1.80);

const nome = 'Bidu'; // variavel de mesmo nome que não colide com a da IIFE
console.log(nome);