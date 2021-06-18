import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";

import styles from "../../styles/Todo.module.css";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Todo({ id, text, completed }) {
  const router = useRouter();
  const [showSubmit, setShowSubmit] = useState(true);

  useIsomorphicLayoutEffect(() => {
    setShowSubmit(false);
  }, []);

  const handleChange = async (e) => {
    const formData = new FormData(e.target.form);
    const res = await fetch(`/api/todos/${id}/state`, {
      method: "post",
      body: new URLSearchParams(formData),
    });
    const body = await res.json();

    await router.replace(body.location);
  };

  return (
    <form
      action={`/api/todos/${id}/state?redirect`}
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

      {showSubmit && <button type="submit">Save</button>}
    </form>
  );
}
