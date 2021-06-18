import { Todo } from "./Todo";

export function TodoList({ todos }) {
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