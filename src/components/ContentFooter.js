import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { deleteTodoFromStorage } from "./Storage/DeleteTodoFromStorage";

export default function ContentFooter() {
  const { todos, filter, setFilter, setTodos } = useTodo();

  const clearCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed);
    completedTodos.forEach(todo => deleteTodoFromStorage(todo.id)); 

    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
    localStorage.setItem("todos", JSON.stringify(activeTodos));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length} item</strong>
        {todos.length !== 1 && "s"}
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("active")}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
