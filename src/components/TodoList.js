import { Todo } from "./Todo";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos }) => (
  <ul className={styles.container}>
    {todos.map((todo) => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);
