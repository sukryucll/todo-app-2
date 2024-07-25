import React from "react";
import { useTodo } from "../../../contexts/TodoContext";

export default function Item({ todo }) {
  const { toggleTodo, destroyTodo } = useTodo();

  const onChange = (id) => toggleTodo(id);

  const onDestroy = (id) => destroyTodo(id);

  return (
    <li mv-list-item="todo" className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          property="done"
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <label property="text">{todo.text}</label>
        <button
          className="destroy"
          mv-action="delete(todo)"
          onClick={() => onDestroy(todo.id)}
        ></button>
      </div>
    </li>
  );
}
