let cpfImput = '026.337.451-30';
let cpfLimpo = cpfImput.replace(/\D+/g, '');  //representação de "tudo que nao seja um numero"
let cpfArray = Array.from(cpfLimpo);
let cpfParcial = Array.from(cpfArray.splice(0, -2));
console.log(cpfArray);

function geraDigito(cpfParcial){
    let regressivo = cpfParcial.length + 1;
    const arrayNovo = cpfParcial.reduce((ac, valor) => {
        console.log(regressivo, valor, ac)
        ac += regressivo * valor;
        regressivo--;
        return ac;
    }, 0);

    let digitoDoCpf = 11 - (arrayNovo % 11);

    cpfParcial.push(digitoDoCpf.toString());
    return cpfParcial;
}

const cpfComUmDig = geraDigito(cpfParcial);
//const cpfCompleto = geraDigito(cpfComUmDig);
//console.log(cpfComUmDig)

