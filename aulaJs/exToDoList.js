const textoDigitado = document.querySelector('.caixa-de-texto');
const tarefaAdiconada = document.querySelector('.tarefa-adicionada')
const lista = document.querySelector('.lista');
const deleteBtn = document.querySelector('.delete-btn');
const liRemovida = document.querySelector('item-lista');


textoDigitado.addEventListener('keypress', function (event) {

    if (event.keyCode === 13) {
        if (!textoDigitado) return;
        mesageLi(textoDigitado.value);
    }
});

tarefaAdiconada.addEventListener('click', function () {
    if (!textoDigitado) return;

    mesageLi(textoDigitado.value);
    removeLi();

});

function addLi() {
    const li = document.createElement('li');
    li.setAttribute('class', 'item-lista');
    return li;
}

function addButton(li) {
    li.innerHTML += '  ';
    const btn = document.createElement('button');
    btn.setAttribute('class', 'delete-btn');
    btn.innerHTML = `Apagar`;
    li.appendChild(btn);
}

function cleanText(){
    textoDigitado.value = ''
    textoDigitado.focus();
}

function mesageLi(msg) {
    const li = addLi();
    li.innerHTML = msg;
    lista.append(li);
    cleanText();
    addButton(li);
    salvarTarefas();
}


document.addEventListener('click', function (event) {
    const elemento = event.target;
    if(elemento.classList.contains('delete-btn')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const tarefaSalva = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of tarefaSalva){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const listaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('lista', listaJSON);
}

function addSavedTaks(){
    const tarefas = localStorage.getItem('lista');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);
}