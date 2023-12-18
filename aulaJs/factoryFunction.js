// são funções que retornam objetos


function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome, 
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(alteracao){
            alteracao = alteracao.split('  ');
            this.nome = alteracao.shift();
            this.sobrenome = alteracao.join('  '); //join() retorna o array como uma string e o que vai dentro do parametro vai ficar entre os valores dos indices
        },


        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`; //this se refere à quem chamou a função, neste caso pessoa1 ou pessoa2. Se equipara a usar console.log(pessoa1.nome);
        },

        altura,
        peso,
        //Getter (faz a função se comportar como um parametro do objeto)
        get imc(){ //se usar o get, a função passa a se comportar como parametro mas ainda executa o que está dentro da função
            return (this.peso / (this.altura ** 2)).toFixed(2);
        }
    }
}

const pessoa1 = criaPessoa('Artur', 'Brandão', 77, 1.8);
console.log(pessoa1.fala('JavaScript'));
console.log(pessoa1.imc); //somem os parenteses mas ela ainda executa

pessoa1.nomeCompleto = 'Amanda Theodoro Leandro';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
