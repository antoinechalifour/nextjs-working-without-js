import { addTodo } from "../../src/server/addTodo";

export default async function addTodoEndpoint(req, res) {
    await addTodo(req.body.todo)

    res.end();
}