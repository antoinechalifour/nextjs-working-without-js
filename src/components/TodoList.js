import { Todo } from "./Todo";
import styles from "./TodoList.module.css";
import { TodoListForm } from "./TodoListForm";

export const TodoList = ({ todos }) => (
  <>
    <ul className={styles.container}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>

    <TodoListForm />
  </>
);
