import { saveTodo, todoOfId } from "../../../../src/server/todoRepository";

export default async function (req, res) {
  const { id } = req.query;
  const todo = await todoOfId(id);
  todo.completed = req.body[id] === "on";

  saveTodo(todo);

  if (req.query.redirect) res.redirect(302, "/");
  else res.json({ location: "/" });
}
