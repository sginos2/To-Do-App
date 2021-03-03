const lists = {};
let currentList;

//dummy data
const list = new List('Home To-Dos');
lists[list.id] = list;
currentList = list;

document.getElementById('new-list-button').addEventListener('click', addNewList);

print();

function print() {
    let listsHtml = '';
    Object.values(lists).forEach(list => {
        listsHtml += `<li class="list-group-item" onclick="selectCurrentList('${list.id}')"><i class="fas fa-minus-circle"></i>${list.name}</li>`;
    });
    document.getElementById('lists').innerHTML = listsHtml;
    document.getElementById('current-list-name').innerText = currentList.name;
};

function addNewList() {
    const listName = document.getElementById('new-list-input').value;
    if (listName) {
        let newId = Utils.getNewId('list-');
        const newList = new List(listName);
        lists[newList.id] = newList;
        document.getElementById('new-list-input').value = '';
        print();
    };
};

function selectCurrentList(listId) {
    currentList = lists[listId];
    print();
};

/*data models
class User {
    constructor(id, lists){
        this.id = id;
        this.lists = lists;
    };

    addList(list) {};

    removeList(listId) {};
};

class List {
    constructor(name, id, todos = []) {
        this.name = name;
        this.id = id;
        this.todos = todos;
    };

    addToDo(todo) {};

    removeToDo(todoId) {};

    getToDo(todoId) {};

    clearCompletedTodos() {};
};

class ToDo {
    constructor(text, id) {
        this.text = text;
        this.id = id;
        this.completed = false;
    };

    markAsCompleted() {};

    edit(text) {};
};
*/