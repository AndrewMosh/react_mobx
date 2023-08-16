import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import todoStore from "../store/TodoStore";

const TodoApp = observer(() => {
  const [newTodo, setNewTodo] = useState("");

  const store = todoStore;

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      store.addTodo(newTodo);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    store.toggleTodo(index);
  };

  const handleRemoveTodo = (index) => {
    store.removeTodo(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {store.todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoApp;
