import Header from "./shared/components/Header/Header.tsx";
import TaskList from "./shared/components/TaskList/TaskList.tsx";
import type { Task } from "./shared/types/types.ts";

function App() {
  const tasks: Task[] = [
    { id: 1, title: "Learn React basics", completed: true, priority: "high" },
    { id: 2, title: "Build TaskFlow app", completed: false, priority: "high" },
    { id: 3, title: "Master JSX syntax", completed: false, priority: "medium" },
    { id: 4, title: "Style the app", completed: false, priority: "low" },
  ];

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
      <Header
        title="TaskFlow"
        completedCount={completedCount}
        totalCount={tasks.length}
      />
      <main>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;