/* eslint-disable @next/next/no-html-link-for-pages */

import { AddTodoForm } from "../src/components/AddTodoForm";
import { TodoList } from "../src/components/TodoList";
import { protect } from "../src/server/authentication";
import { allTodos } from "../src/server/todoSqliteRepository";

import styles from "../styles/Home.module.css";

export default function Home({ todos }) {
  return (
    <main className={`card page-content ${styles.container}`}>
      <nav>
        <a href="/action/logout">Logout</a>
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
