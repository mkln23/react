import type { Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./AddTaskForm.module.css";

type Priority = "high" | "medium" | "low";

interface AddTaskFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  priority: Priority;
  setPriority: Dispatch<SetStateAction<Priority>>;

  dueDate: string;
  setDueDate: Dispatch<SetStateAction<string>>;

  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function AddTaskForm({
  title,
  setTitle,
  priority,
  setPriority,
  dueDate,
  setDueDate,
  handleSubmit,
}: AddTaskFormProps) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <select
        className={styles.priority}
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        className={styles.dueDate}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className={styles.submitBtn} type="submit">
        Add task
      </button>
    </form>
  );
}