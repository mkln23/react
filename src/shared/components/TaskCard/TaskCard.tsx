import styles from "./TaskCard.module.css";

interface TaskCardProps {
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

function TaskCard({ title, completed, priority }: TaskCardProps) {
  return (
    <li className={`${styles.card} ${completed ? styles.completed : ""}`}>
      <span>{completed ? "✅" : "⬜"}</span>
      <span>{title}</span>
      <span className={`${styles.priority} ${styles[priority]}`}>
        {priority}
      </span>
    </li>
  );
}

export default TaskCard;