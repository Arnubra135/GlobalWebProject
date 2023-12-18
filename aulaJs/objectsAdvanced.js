// defineProperty - defineProperties

/*function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable: false,  //mostra a chave (faz com que o nome estoque apareça no objeto)
        value: estoque, // adiciona valor à chave
        writable: true, // permite alteração de valor na chave
        configurable: false // permite configurações na chave (delete, recriação da chave, etc)
    });
};*/

/*const p1 = new Produto('camiseta', 20, 3);
console.log(Object.keys(p1)); // caso enumerable seja falso, a chave criada pela property n aparece

// Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{
        enumerable: false,  //mostra a chave (faz com que o nome estoque apareça no objeto)
        configurable: false, // permite configurações na chave (delete, recriação da chave, etc)
        get: function(){         // atribui um valor 
            return estoque;
        },
        set: function(valor){    // configura o valor atribuido

        }
    });
};*/


// prototypes

 function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
 };

Pessoa.prototype.nomeCompleto = function() {return this.nome + ' ' + this.sobrenome};

 const pessoa1 = new Pessoa('Artur', 'Brandao');
 const pessoa2 = new Pessoa('Amanda', 'Theodoro');

 Object.setPrototypeOf(pessoa1, pessoa2);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = (valor) => {return this.preco += valor;};
Produto.prototype.desconto = (valor) => {return this.preco -= valor;};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
const regata = new Camiseta('regata', 19, 'preta');
const canecaMelhorChefe = new Caneca('Melhor chefe', 40, 'ceramica');
const produto = new Produto('gen', 111);
produto.desconto(5);
console.log(produto);