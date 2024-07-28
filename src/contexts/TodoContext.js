import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodoToStorage,getTodosFromStorage } from "../components/Storage/AddTodoToStorage";
import { deleteTodoFromStorage } from "../components/Storage/DeleteTodoFromStorage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodosFromStorage());
  }, []);

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), completed: false, text };
    setTodos((prev) => [...prev, newTodo]);
    addTodoToStorage(newTodo);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const destroyTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    deleteTodoFromStorage(id);
  };

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};
