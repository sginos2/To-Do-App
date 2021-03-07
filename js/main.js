let lists = retrieve();
let currentList;

//dummy data
// const list = new List('Home To-Dos');
// lists[list.id] = list;
// currentList = list;

document.getElementById('new-list-button').addEventListener('click', addNewList);
document.getElementById('new-list-input').addEventListener('keydown', (event) => {
    if (event.key =='Enter') {
        addNewList();
    }
});
document.getElementById('addItem').addEventListener('click', addNewTodo);
document.getElementById('newItem').addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addNewTodo();
    }
});

// document.getElementById('checkbox').addEventListener('click', markAsCompleted);
// document.getElementById('clear-completed').addEventListener('click', clearCompletedTodos);


print();

function print() {
    let listsHtml = '';
    Object.values(lists).forEach(list => {
        listsHtml += `
        <li class="list-group-item" onclick="selectCurrentList('${list.id}')">
            <i id="remove-list" class="fas fa-minus-circle" onclick="removeList('${list.id}')"></i>
            ${list.name}
        </li>`;
    });
    document.getElementById('lists').innerHTML = listsHtml;

    if(currentList !== undefined)
    {
        document.getElementById('current-list-name').innerText = currentList.name;

        let listWindowHtml = '';
        var index = 0;
        currentList.todos.forEach(todo => {
            listWindowHtml += `
            <li class="list-group-item">
                <i id="remove-todo" class="fas fa-minus-circle" onclick="removeTodo('${todo.id}')"></i>
                <span id="todo-text" ondblclick="displayTodoEditTextbox('${todo.text}', '${todo.id}')">${todo.text}</span> 
                <input id="checkbox-${index}" type="checkbox" onclick="toggleCompleted('${todo.id}')">
            </li>`;
            index++;
        });
    
        document.getElementById('currentTodos').innerHTML = listWindowHtml; 
    }
};

function addNewList() {
    const listName = document.getElementById('new-list-input').value;
    if (listName) {
        const newList = new List(listName);
        lists[newList.id] = newList;
        document.getElementById('new-list-input').value = '';
        document.getElementById('error-message').innerText = "";
        print();
        save();
    };
};

function removeList(listId) {
    delete lists[listId];
    currentList = undefined;
    document.getElementById('current-list-name').innerText = "";
    print();
    save();
}

function selectCurrentList(listId) {
    currentList = lists[listId];
    print();
    save();
};

function addNewTodo() {
    const text = document.getElementById('newItem').value;
    if (text) {
        const newTodo = new Todo(text, false);
        if(currentList !== undefined) {
            currentList.todos.push(newTodo);
        }
        else{
            document.getElementById('error-message').innerText = "Please create a list first";
        }
        document.getElementById('newItem').value = '';
        print();
        save();
    };
}

function removeTodo(todoId) {
    for (let i = 0; i < currentList.todos.length; i++)
    {
        if(currentList.todos[i].id === todoId)
        {
            currentList.todos.splice(i, 1)
            break;
        }
    }
    print();
    save();
}

function displayTodoEditTextbox(text, todoId) {
    document.getElementById('todo-text').innerHTML = `<input id="edit-text-input" type="text" value="${text}">`;

    document.getElementById('edit-text-input').addEventListener('keydown', (event) => {
        if (event.key =='Enter') {
            editTodo(todoId);
        }
    });
}

function editTodo(todoId) {
    const text = document.getElementById('edit-text-input').value;
    if (text) {
        var index = currentList.todos.findIndex(todo => todo.id === todoId);
        currentList.todos[index].text = text;
    }
    print();
    save();
}

function toggleCompleted(todoId) {
    for (let i = 0; i < currentList.todos.length; i++) {
        if (currentList.todos[i].id === todoId) {
            if (document.getElementById("checkbox-".concat(i)).checked) {
                currentList.todos[i].completed = true;
            } else {
                currentList.todos[i].completed = false;
            }
        }
    }
}

function clearCompletedTodos() {
    for (let i = 0; i < currentList.todos.length; i++) {
        if (currentList.todos[i].completed) {
            currentList.todos.splice(i, 1);
        }
    }
    print();
    save();
}

function save() {
    // save the lists object
    localStorage.setItem('lists', JSON.stringify(lists));
    // localStorage.setItem('currentChat', JSON.stringify(currentChat));
}

function retrieve() {
    const retrievedLists = JSON.parse(localStorage.getItem('lists'));
    if (retrievedLists) {
      return retrievedLists;
    }
    return {};
  }
