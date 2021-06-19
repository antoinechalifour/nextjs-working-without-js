import { deleteTodo } from "./todoSqliteRepository";

export function archiveTodo(id) {
    return deleteTodo(id)
}