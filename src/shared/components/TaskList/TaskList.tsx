import type { Task } from "@/shared/types/types";
import styles from "./Task.List.module.css"
import TaskCard from "../TaskCard/TaskCard";
interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>No tasks yet! Add some to get started.</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          priority={task.priority}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;