import { v4 as uuid } from 'uuid'
import { saveTodo } from '../../src/server/todoRepository'

export default function (req, res) {
    const { todo: text } = req.body

    saveTodo({
        id: uuid(),
        text,
        completed: false
    })

    res.redirect(302, '/')
}