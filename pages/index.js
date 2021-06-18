import { AddTodoForm } from "../src/components/AddTodoForm";
import { TodoList } from "../src/components/TodoList";
import { protect } from "../src/server/authentication";
import { allTodos } from "../src/server/todoRepository";

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
