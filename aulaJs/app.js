/*const nome = prompt('Insira seu nome completo.');
document.body.innerHTML += `Seu nome é: ${nome} `;
document.body.innerHTML += '<br>';
document.body.innerHTML += `Seu nome possúi ${nome.length} letras. `;
document.body.innerHTML += '<br>';
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}`
document.body.innerHTML += '<br>';
document.body.innerHTML += `O pirmeiro indice da letra R no seu nome é ${nome.indexOf('r')}`
document.body.innerHTML += '<br>';
document.body.innerHTML += `as ultimas 3 letras do seu nome são ${nome.slice(-3)}`
document.body.innerHTML += '<br>';
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()}`
document.body.innerHTML += '<br>';
document.body.innerHTML += `as palavras do seu nome são  ${nome.split(' ')}` 
document.body.innerHTML += '<br>';
document.body.innerHTML += ``
document.body.innerHTML += '<br>';*/

const calculo = document.querySelector('.calculoDoImc');
const resultado = document.querySelector('.resultado');


calculo.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('.peso');
    const inputAltura = evento.target.querySelector('.altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = getImc(peso, altura);

        if(!peso){
        setResultado('Input Inválido!', false);
        return;
    }

        if(!altura){
        setResultado('Input Inválido!', false);
        return;
    }

    const nivelImc = getNivelImc(imc);
    const msg =  `Seu IMC é ${imc}. (${nivelImc})`;
    setResultado(msg, true);

});

function addParagrafo() {
    const para = document.createElement('p');
    return para;
}


function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = addParagrafo();
    if(isValid){
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad-shit')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getImc(peso, altura){
    const somaImc = peso / (altura ** 2);
    return somaImc.toFixed(2);
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 2','Obesidade grau 1','Obesidade grau 3'];

    if(imc >= 39.9){
        return nivel[5];
    }
    if(imc >= 34.9){
        return nivel[4];
    }
    if(imc >= 29.9){
        return nivel[3];
    }
    if(imc >= 24.5){
        return nivel[2];
    }
    if(imc >= 18.5){
        return nivel[1];
    }
    if(imc < 18.5){
        return nivel[0];
    }
}

