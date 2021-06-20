import { FormInput } from "./FormInput";
import styles from "./AddTodoForm.module.css";
import { refresh } from "../utils";

const useAddTodoForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    await fetch("/api/todos", {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    await refresh();
    e.target.reset();
  };

  return { handleSubmit };
};

export const AddTodoForm = () => {
  const { handleSubmit } = useAddTodoForm();

  return (
    <form
      action="/action/submit-new-todo"
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

      <button className="button" type="submit">Add</button>
    </form>
  );
};
