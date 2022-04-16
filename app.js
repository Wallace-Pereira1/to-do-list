'use strict';

/*          <label class="todo__item">
                <input type="checkbox">
                <div>teste de item 1</div>
                <input type="button" value="X">
            </label> */

let banco = [
    { 'tarefa': 'estudar js', 'status': '' },
    { 'tarefa': 'netflix', 'status': 'checked' },
    { 'tarefa': 'teste', 'status': '' }
]

const criarItem = (tarefa, status = '') => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
                <input type="checkbox" ${status}>
                <div>${tarefa}</div>
                <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const render = () => {
    limparTarefas()
    banco.forEach(item => criarItem(item.tarefa, item.status));
}

document.getElementById('newItem').addEventListener('keypress', adicionarTarefa);

const adicionarTarefa = (evento) => {
    const tecla = evento.key
    console.log(tecla);
    if (tecla === 'Enter') {
        banco.push({ 'tarefa': 'estudar js', 'status': '' })
    }
}

render();