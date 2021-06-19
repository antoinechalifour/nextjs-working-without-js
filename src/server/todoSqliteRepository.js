import { knex } from "./knex";

export function saveTodo(todo) {
  return knex("todos").insert(todo).onConflict('id').merge();
}

export async function allTodos() {
  const todos = await  knex.select("*").from("todos")

  return todos.map(todo => ({
    ...todo,
    completed: !!todo.completed
  }));
}

export async function todoOfId(id) {
  const todo = await knex.select("*").from("todos").where({ id }).first();

  if (!todo) throw new Error(`Todo of ID ${id} not found`);

  return {
    ...todo,
    completed: !!todo.completed
  };
}

export function deleteTodo(id) {
  return knex('todos').where({ id }).delete()
}