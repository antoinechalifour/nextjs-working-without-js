import { toggleTodoState } from "../../../../../src/server/toggleTodoState";

export default async function toggleTodoStateAction(req, res) {
  const id = req.query.id
  await toggleTodoState(id, req.body[id] === "on");

  res.redirect(302, "/");
}
