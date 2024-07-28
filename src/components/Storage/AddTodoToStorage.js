export function addTodoToStorage(newTodo) {
  const todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodosFromStorage() {
  let todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
