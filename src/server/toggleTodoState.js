import { saveTodo, todoOfId } from "./todoSqliteRepository";

export async function toggleTodoState(id, isCompleted) {
  const todo = await todoOfId(id);
  todo.completed = isCompleted;

  saveTodo(todo);
}
