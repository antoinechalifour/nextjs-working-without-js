import { toggleTodoState } from "../../../src/server/toggleTodoState";

const lastElement = (array) => array[array.length - 1];

export default async function submitTodoListAction(req, res) {
  for (const [id, formState] of Object.entries(req.body)) {
    const state = Array.isArray(formState) ? lastElement(formState) : formState;

    await toggleTodoState(id, state === "on");
  }

  res.redirect(302, "/");
}
