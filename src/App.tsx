import Header from "./shared/components/Header/Header";
import TaskList from "./shared/components/TaskList/TaskList";
import type { Task } from "./shared/types/types";

function App() {
  const tasks: Task[] = [
    { id: 1, title: "Learn React basics", completed: true, priority: "high", category: "Learning" },
    { id: 2, title: "Build TaskFlow app", completed: false, priority: "high", category: "Learning" },
    { id: 3, title: "Master JSX syntax", completed: false, priority: "medium", category: "Learning" },
    { id: 5, title: "Buy groceries", completed: false, priority: "medium", category: "Personal" },
    { id: 4, title: "Style the app", completed: false, priority: "low", category: "Learning" },
    { id: 6, title: "Call dentist", completed: true, priority: "low", category: "Personal" },
  ];

  const completedCount = tasks.filter(task => task.completed).length;

  const categories = [...new Set(tasks.map(task => task.category))];

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
      <Header
        title="TaskFlow"
        completedCount={completedCount}
        totalCount={tasks.length}
      />
      <main>
        {categories.map(category => (
          <section key={category} style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "18px", marginBottom: "8px", color: "#4b5563" }}>
              {category}
            </h2>
            <TaskList tasks={tasks.filter(task => task.category === category)} />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;