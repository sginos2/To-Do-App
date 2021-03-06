class Todo {
    constructor(text, completed = false) {
        this.id = Utils.getNewId('todo-');
        this.text = text;
        this.completed = completed;
    }
};