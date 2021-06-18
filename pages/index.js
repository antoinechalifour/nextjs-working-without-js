import { useEffect, useLayoutEffect, useState } from "react";
import { protect } from "../src/server/authentication";
import { allTodos } from "../src/server/todoRepository";

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

function Todo({ id, text, completed }) {
  const [showSubmit, setShowSubmit] = useState(true)

  useIsomorphicLayoutEffect(() => {
    setShowSubmit(false)
  }, [])

  return (
    <span>
      <form action={`/api/todos/${id}/state`} method="post">
        <label
          htmlFor={id}
          style={{ textDecoration: completed ? "strikethrough" : "none" }}
        >
          {text}
        </label>
        <input name={id} id={id} type="checkbox" defaultChecked={completed} />

        {showSubmit && <button type="submit">Save</button>}
      </form>
    </span>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

function AddTodoForm() {
  return (
    <form action="/api/add-todo" method="post">
      <div>
        <label htmlFor="todo">Add a todo</label>
        <input type="text" name="todo" id="todo" />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default function Home({ todos }) {
  return (
    <main>
      <nav>
        <a href="/api/logout">Logout</a>
      </nav>

      <h1>Your tasks for today</h1>

      <TodoList todos={todos} />

      <AddTodoForm />
    </main>
  );
}

export const getServerSideProps = protect(async ({ req, res }) => {
  const todos = await allTodos();

  return {
    props: { todos },
  };
});
