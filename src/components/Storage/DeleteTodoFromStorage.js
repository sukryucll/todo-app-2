import { getTodosFromStorage } from "./AddTodoToStorage";

export function deleteTodoFromStorage(deleteTodoId) {
  const todos = getTodosFromStorage();
  const updatedTodos = todos.filter((todo) => todo.id !== deleteTodoId);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}
