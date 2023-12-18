/*function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}


const timer = setInterval(function(){console.log(mostraHora());}, 1000);

setTimeout(function(){clearInterval(timer)}, 10000);*/

function getSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { timeZone: 'UTC' });
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getSeconds(segundos);
    }, 1000);
    return timer;
}

function pausaRelogio() {

    return setTimeout(function () { clearInterval(timer) });
}

document.addEventListener('click', function (eve) {
    const elemento = eve.target;

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('relogio-pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (elemento.classList.contains('pausar')) {
        relogio.classList.add('relogio-pausado');
        pausaRelogio();
    }

    if (elemento.classList.contains('zerar')) {
        relogio.classList.remove('relogio-pausado');
        pausaRelogio();
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }
});




