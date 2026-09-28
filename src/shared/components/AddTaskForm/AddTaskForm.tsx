import { useEffect, useRef, type Dispatch, type FormEvent, type SetStateAction } from "react";
import styles from "./AddTaskForm.module.css";
import type { Priority } from "@/shared/types/types";

interface AddTaskFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;

  priority: Priority;
  setPriority: Dispatch<SetStateAction<Priority>>;

  category: string;
  setCategory: Dispatch<SetStateAction<string>>;

  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function AddTaskForm({
  title,
  setTitle,
  priority,
  setPriority,
  category,
  setCategory,
  handleSubmit,
}: AddTaskFormProps) {
  useEffect(() => inputRef.current?.focus())
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
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
        type="text"
        className={styles.category}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Task Category"
      />

      <button className={styles.submitBtn} type="submit">
        Add task
      </button>
    </form>
  );
}