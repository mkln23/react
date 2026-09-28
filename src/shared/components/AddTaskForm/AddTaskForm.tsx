import { useEffect, useRef, type Dispatch, type FormEvent, type SetStateAction } from "react";
import styles from "./AddTaskForm.module.css";
import type { Priority } from "@/shared/types/types";

interface AddTaskFormProps {
  priority: Priority;
  setPriority: Dispatch<SetStateAction<Priority>>;

  category: string;
  setCategory: Dispatch<SetStateAction<string>>;

  handleSubmit: (title: string) => void;
}

export default function AddTaskForm({
  priority,
  setPriority,
  category,
  setCategory,
  handleSubmit,
}: AddTaskFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit(inputRef.current?.value ?? "");
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        ref={inputRef}
        className={styles.title}
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