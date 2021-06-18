import { v4 as uuid } from "uuid";
import { saveTodo } from "../../src/server/todoRepository";

export default function addTodo(req, res) {
  const { todo: text } = req.body;

  saveTodo({
    id: uuid(),
    text,
    completed: false,
  });

  if (req.query.redirect) res.redirect(302, "/");
  else res.json({ location: "/" });
}
