import { knex } from "./knex";

export async function saveTodo(todo) {
  await knex("todos").insert(todo).onConflict('id').merge();
}

export async function allTodos() {
  return knex.select("*").from("todos");
}

export async function todoOfId(id) {
  const todo = await knex.select("*").from("todos").where({ id }).first();

  if (!todo) throw new Error(`Todo of ID ${id} not found`);

  return todo;
}
