import { addTodo } from "../../../src/server/addTodo";

export default async function addTodoAction(req, res) {
  await addTodo(req.body.todo)

  res.redirect(302, "/");
}
