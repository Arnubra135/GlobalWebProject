function roletaRussa(min, max){
    const bala = Math.random() * (max - min) + min;
    return Math.floor(bala);
}

let tiro = roletaRussa(1, 6);

console.log(tiro);


//do while é o mesmo mas executa a função pelo menos uma vez
 