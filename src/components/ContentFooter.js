import React from "react";
import { useTodo } from "../contexts/TodoContext";

export default function ContentFooter() {
  const { todos, filter, setFilter, setTodos } = useTodo();

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
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