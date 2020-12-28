const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoItems = document.querySelectorAll('.todo-item');

function addListItem() {
    todoInput.addEventListener('keypress', function(e){
        if(e.keyCode === 13) {
            let newListItem = createListItem(todoInput.value);
            todoList.appendChild(newListItem);
            todoList.insertBefore(newListItem, todoList.childNodes[0]);
            todoInput.value = '';
        }
    })
}

function createListItem(text) {
    let newListItem = document.createElement('li');
    newListItem.textContent = text;
    newListItem.classList.add('todo-item');
    const remove = document.createElement('a');
    remove.innerHTML = '<i class="fa fa-remove"></i>';
    newListItem.appendChild(remove);
    return newListItem;
}

function toggleDone() {
    todoList.addEventListener('click', function(e) {
        if (e.target.classList.contains('todo-item')) {
            e.target.classList.toggle('done');
        } else if (e.target.classList.contains('fa-remove')) {
            e.target.parentElement.parentElement.remove();
        }
    })
}

toggleDone();
addListItem();