import { useEffect, useLayoutEffect, useState } from "react";
import { refresh } from "../utils";
import { ArchiveTodoButton } from "./ArchiveTodoButton";

import styles from "./Todo.module.css";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const useTodo = (id) => {
  const [showSubmit, setShowSubmit] = useState(true);

  useIsomorphicLayoutEffect(() => {
    setShowSubmit(false);
  }, []);

  const handleChange = async (e) => {
    const formData = new FormData(e.target.form);
    await fetch(`/api/todos/${id}/state`, {
      method: "post",
      body: new URLSearchParams(formData),
    });

    await refresh();
  };

  return { handleChange, showSubmit };
};

export const Todo = ({ id, text, completed }) => {
  const { handleChange, showSubmit } = useTodo(id);

  return (
    <div className={styles.container}>
      <form
        action={`/action/todos/${id}/state`}
        method="post"
        className={styles.container}
      >
        <label htmlFor={id} className={completed ? styles.completed : ""}>
          {text}
        </label>

        <input
          name={id}
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={handleChange}
        />

        {showSubmit && (
          <button
            type="submit"
            aria-label="Valider les changements"
            title="Valider les changements"
          >
            ✔️
          </button>
        )}
      </form>

      <ArchiveTodoButton id={id} />
    </div>
  );
};
