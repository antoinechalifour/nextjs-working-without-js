import path from 'path'
import fs from 'fs/promises'

const DB_FILE_PATH = path.join(process.cwd(), 'db.json')

export async function saveTodo(todo) {
    await ensureDbFile()
    const contents = await getContents()
    contents[todo.id] = todo

    await fs.writeFile(DB_FILE_PATH, JSON.stringify(contents, null, 2))
}

export async function allTodos() {
    await ensureDbFile()

    return Object.values(await getContents())
}

export async function todoOfId(id) {
    await ensureDbFile()

    const contents = await getContents()
    const todo = contents[id]

    if (!todo) throw new Error(`Todo of ID ${id} not found`)

    return todo
}

async function ensureDbFile() {
    try {
        await fs.readFile(DB_FILE_PATH, 'utf-8')
    } catch (err) {
        await fs.writeFile(DB_FILE_PATH, JSON.stringify({}, null, 2))
    }
}

async function getContents() {
    return JSON.parse(await fs.readFile(DB_FILE_PATH, 'utf-8'))
}