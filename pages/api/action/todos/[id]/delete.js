import { archiveTodo } from "../../../../../src/server/archiveTodo"

export default async function removeTodoAction(req, res) {
    await archiveTodo(req.query.id)

    res.redirect(302, '/')
}