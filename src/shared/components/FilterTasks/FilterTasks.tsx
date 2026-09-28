import type { Filter } from "@/shared/types/types";
import type { Dispatch, SetStateAction } from "react";
import styles from "./FilterTasks.module.css";

interface FilterTasksType{
    taskFilter: Filter;
    setTaskFilter: Dispatch<SetStateAction<Filter>>
}
export default function FilterTasks({ taskFilter, setTaskFilter }: FilterTasksType) {
  return (
    <select
      className={styles.filter}
      value={taskFilter}
      onChange={(e) => setTaskFilter(e.target.value as Filter)}
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  );
}
