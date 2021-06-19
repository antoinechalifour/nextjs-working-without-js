import { saveTodo, todoOfId } from "../../../../src/server/todoSqliteRepository";

export default async function toggleTodoState(req, res) {
  const { id } = req.query;
  const todo = await todoOfId(id);
  todo.completed = req.body[id] === "on";

  saveTodo(todo);

  if (req.query.redirect) res.redirect(302, "/");
  else res.json({ location: "/" });
}
