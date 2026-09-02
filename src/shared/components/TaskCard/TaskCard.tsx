import styles from "./TaskCard.module.css";

interface TaskCardProps {
  id: number;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskCard({ id, title, completed, priority, onToggle, onDelete }: TaskCardProps) {
  return (
    <li className={`${styles.card} ${completed ? styles.completed : ""}`}>
      <span
        className={styles.toggle}
        onClick={() => onToggle(id)}
      >
        {completed ? "✅" : "⬜"}
      </span>
      <span className={styles.title}>{title}</span>
      <span className={`${styles.priority} ${styles[priority]}`}>
        {priority}
      </span>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(id)}
      >
        ✕
      </button>
    </li>
  );
}

export default TaskCard;