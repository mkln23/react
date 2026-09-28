export type Priority = "high" | "medium" | "low";
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
  category: string;
}

export type Filter = "all" | "active" | "completed"
