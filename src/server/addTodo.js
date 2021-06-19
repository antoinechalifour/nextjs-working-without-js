import { v4 as uuid } from "uuid";

import { saveTodo } from "./todoSqliteRepository";

export const addTodo = (text) =>
  saveTodo({
    id: uuid(),
    text,
    completed: false,
  });
