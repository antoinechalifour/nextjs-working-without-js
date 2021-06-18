import { Todo } from "./Todo";
import styles from "../../styles/TodoList.module.css";

export function TodoList({ todos }) {
  return (
    <ul className={styles.container}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}
