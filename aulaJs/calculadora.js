function criaCalculadora(){
    return {
        display: document.querySelector('.input-de-contas'),
        numberButtons: document.querySelector('.btn-number'),
        clearBtn: document.querySelector('.btn-clear'),
        deleteBtn: document.querySelector('.btn-delete'),
        equalBtn: document.querySelector('.btn-equal'),

        inicia(){
            this.cliqueBotoes();
            this.pressEnter();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(event){
                const elemento = event.target;

                if(elemento.classList.contains('btn-number')){
                    this.btnForDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(elemento.classList.contains('btn-delete')){
                    this.deleteOne();
                }

                if(elemento.classList.contains('btn-equal')){
                    this.realizaConta();
                }

               
            }.bind(this));
        },

        btnForDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },
        
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = conta;
            }catch(erro){
                alert('Conta inválida!');
                return;
            }
        },

        pressEnter(){
            
            this.display.addEventListener('keypress', function (event) {
                if (event.keyCode === 13) {
                    this.realizaConta();
                }
            }.bind(this));
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();