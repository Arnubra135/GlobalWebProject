// lançamento de erros 
// try e catch: Try le um código e identifica se há erro ou não, caso haja um erro ele pula para a função cacth e executa

/*try{
    console.log(variavelNaoDefinida);
}catch(error){
    console.log('Variavel não existe');
}*/

function soma(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Valor inserido é invalido');
    }
    return num1 + num2;
}

try{
    const somas = soma('cu', 6);
}catch(error){
    console.log('Ocorreu um erro')
}


/* Try{ 
    é executado quando não há erros
}catch{
    é executado quando há erros
}finally{
    Sempre é executado
}*/

// exemplo

try{
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro') //a ação de fechar o arquivo não pode ficar no try pois não seria executada ao encontrar um erro
    // fechar o arquivo
}catch{
    console.log('Trabalhando no erro...')
}finally{
    console.log('Fechei o arquivo') // ele deve ficar no finally para sempre ser executado independente do que aconteça
}
