import { refresh } from "../utils";
import styles from './ArchiveTodoButton.module.css'

const useArchive = (id) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/todos/${id}/archive`, {
      method: "delete",
    });

    await refresh();
  };

  return { handleSubmit };
};

export const ArchiveTodoButton = ({ id }) => {
  const { handleSubmit } = useArchive(id);

  return (
    <form
      action={`/action/todos/${id}/delete`}
      method="post"
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <button type="submit" aria-label="Archive todo" title="Archive todo">❌</button>
    </form>
  );
};
