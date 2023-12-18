function rescursiva(max){
    if(max >= 10000) return;
    max++;
    console.log(max);
    rescursiva(max);
}

rescursiva(0);

//função que chama a si mesma
