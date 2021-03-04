class List {
    constructor(name, todos = []) {
        this.id = Utils.getNewId('list-');
        this.name = name;
        this.todos = todos;
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