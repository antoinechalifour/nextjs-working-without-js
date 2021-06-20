import { refresh } from "../utils";
import { ArchiveTodoButton } from "./ArchiveTodoButton";

import styles from "./Todo.module.css";

const useTodo = (id) => {
  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append(id, e.target.value)
    
    await fetch(`/api/todos/${id}/state`, {
      method: "post",
      body: new URLSearchParams(formData),
    });

    await refresh();
  };

  return { handleChange };
};

export const Todo = ({ id, text, completed }) => {
  const { handleChange } = useTodo(id);

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={completed ? styles.completed : ""}>
        {text}
      </label>

      <input form="todo-list-form" type="hidden" value="off" name={id} />

      <input
        form="todo-list-form"
        name={id}
        id={id}
        type="checkbox"
        defaultChecked={completed}
        onChange={handleChange}
      />

      <ArchiveTodoButton id={id} />
    </div>
  );
};
