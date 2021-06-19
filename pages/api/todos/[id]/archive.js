import { archiveTodo } from "../../../../src/server/archiveTodo";

export default async function archiveTodoEndpoint(req, res) {
  await archiveTodo(req.query.id);

  res.end();
}
