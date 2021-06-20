import { useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import styles from "./TodoListForm.module.css";

export const TodoListForm = () => {
  const [showForm, setShowForm] = useState(true);

  useIsomorphicLayoutEffect(() => {
    setShowForm(false);
  }, []);

  if (!showForm) return null;

  return (
    <form
      action="/action/submit-todo-list"
      method="post"
      id="todo-list-form"
      className={styles.container}
    >
      <button type="submit">
        <span>✔️</span>
        <span>Valider les changements</span>
      </button>
    </form>
  );
};
