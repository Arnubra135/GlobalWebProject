/*function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEvento (evento){
        evento.preventDefault(); 
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.ariaValueMax,
            peso: peso.ariaValueMax,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}<br> ${sobrenome.value}<br> ${peso.value}<br> ${altura.value}<br><br></p>`
    }

    form.addEventListener('submit', recebeEvento);
}
meuEscopo();*/

/*const hora = 10;
if(hora > 0 && hora <= 12){
    console.log('Bom Dia!!');
}
else if(12 < hora && hora < 18){
    console.log('Boa Tarde!!');
}
else if(18 < hora && hora < 24){
    console.log('Boa Noite!!');
}
else{console.log('Vai pa bosta!!')}*/

/*    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const imc = peso/(altura**2);*/

/*function recebeDados() {
    
    const resultado = document.querySelector('.resultado');
     if(imc < 18.5){
        console.log('abaixo do peso');
    }*/

    const peso = 1
    const altura = 1
    const imc = peso/(altura**2);
    console.log(imc);