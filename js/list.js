class List {
    constructor(name, listContents = []) {
        this.id = Utils.getNewId('list-');
        this.name = name;
        this.listContents = listContents;
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    removeTodo(todoId) {

    }
    clearCompletedTodos() {

    }
    getTodo(todoId) {
        
    }
}