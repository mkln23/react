import type { Task } from "@/shared/types/types";
import styles from "./Task.List.module.css"
import TaskCard from "../TaskCard/TaskCard";



interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>No tasks yet! Add some to get started.</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          title={task.title}
          completed={task.completed}
          priority={task.priority}
        />
      ))}
    </ul>
  );
}

export default TaskList;