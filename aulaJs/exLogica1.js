/*function maiorDeles(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

const maior = maiorDeles(8, 89);

console.log(maior);*/

/*function ePaisagem(largura, altura){
    if(largura > altura){
        return true;
    }
    return false;
}

const largura = 4;
const altura = 15;
const imagem = ePaisagem(largura, altura);

if(imagem === true){
    console.log(`A imagem está no modo paisagem e suas medidas são ${largura}cm de largura e ${altura}cm de altura.`);
}else{
    console.log('Aimagem não está no modo paisagem.')
}*/

// melhoria para o código
// const ePaisagem = (largura, altura) => largura > altura;  (arrow function =  função escrita em uma linha por ser simples poupanto tempo de código)
function divisorTresECinco(){

    if(i % 3 === 0 && i % 5 === 0){
        return `${i}, FizzBuzz`;
    }

    else if(i % 3 === 0){
        return `${i}, Fizz`;
    }

    else if(i % 5 === 0){
        return `${i}, Buzz`;
    }
    return i;
}

for(i = 0 ; i <= 100 ; i++){
console.log(divisorTresECinco());
}