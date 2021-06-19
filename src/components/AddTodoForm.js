import { useRouter } from "next/router";

import { FormInput } from "./FormInput";
import styles from "./AddTodoForm.module.css";

const useAddTodoForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const res = await fetch("/api/add-todo", {
      method: "POST",
      body: new URLSearchParams(formData),
    });
    const body = await res.json();

    await router.replace(body.location);
    e.target.reset();
  };

  return { handleSubmit };
};

export const AddTodoForm = () => {
  const { handleSubmit } = useAddTodoForm();

  return (
    <form
      action="/api/add-todo?redirect=true"
      method="post"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <FormInput
        label="Add a todo"
        name="todo"
        type="text"
        placeholder="Buy some bread..."
      />

      <button type="submit">Add</button>
    </form>
  );
};
