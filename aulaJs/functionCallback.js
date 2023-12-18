function geraRand(min = 1000, max = 3000){
    let rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
}

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, geraRand());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, geraRand());
}


function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, geraRand());
}


// com a função callback independente da hora de execução de cada função que está aleatória, a sequencia executada sempre será de f1 a f3
/*f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo') 
        });
    });
});*/

// aqui como todas as funções estão randomicas elas aparecerão na sequencia em que forem gerados os segundos aletorios

f1();
f2();
f3();

