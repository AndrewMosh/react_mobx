import { makeObservable, observable, action } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      toggleTodo: action,
    });
  }

  addTodo = (text) => {
    this.todos.push({ text, completed: false });
  };

  removeTodo = (index) => {
    this.todos.splice(index, 1);
  };

  toggleTodo = (index) => {
    this.todos[index].completed = !this.todos[index].completed;
  };
}

const todoStore = new TodoStore(); // Создаем экземпляр TodoStore

export default todoStore; // Экспортируем этот экземпляр
