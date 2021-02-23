const lists = {
    1: {
        name: 'Cras justo odio',
        todos: [
            {
                text: 'Walk the dog',
                completed: false,
            },
            {
                text: 'Fix the faucet',
                completed: false,
            },
            {
                text: 'Get groceries',
                completed: false,
            },
        ],
    },
    2: {
        name: 'Dapibus ac facilisis in',
        todos: [
            {
                text: 'Walk the dog',
                completed: false,
            },
            {
                text: 'Fix the faucet',
                completed: false,
            },
            {
                text: 'Get groceries',
                completed: false,
            },
        ],
    },
    3: {
        name: 'Morbi leo risus',
        todos: [
            {
                text: 'Walk the dog',
                completed: false,
            },
            {
                text: 'Fix the faucet',
                completed: false,
            },
            {
                text: 'Get groceries',
                completed: false,
            },
            {
                text: 'Run the dishwasher',
                completed: false,
            },
            {
                text: 'Fold laundry',
                completed: false,
            },
        ],
    },
};

const currentList = lists[0];

//data models
/* 
-----------------
user:
-id
-lists
-addNewList()
-removeList()

class User {
    constructor(id, lists){
        this.id = id;
        this.lists = [];
    }
}
-----------------
HAS
-----------------
todo list:
-id
-todos
-addToDo()
-removeToDo(id)
-getToDo(id)
-renameList()

class ToDoList {
    constructor(id, todos) {
        this.id = id;
        this.todos = [];
    }
}
-----------------
HAS
-----------------
todo:
-id
-text
-completed
-setCompleted()
-edit()

class ToDo {
    constructor(id, text, completed) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
}
-----------------
*/