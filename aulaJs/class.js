//usando classe não precisa linkar no proto, ela já faz isso automaticamente. testar no navegador

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}


const p1 = new Pessoa('Artur', 'Brandao');
console.log(p1);
