import { useState } from "react";
import Header from "./shared/components/Header/Header";
import TaskList from "./shared/components/TaskList/TaskList";
import type { Filter, Priority, Task } from "./shared/types/types";
import AddTaskForm from "./shared/components/AddTaskForm/AddTaskForm";
import FilterTasks from "./shared/components/FilterTasks/FilterTasks";

function App() {
  const initialTasks: Task[] = [
    {
      id: 1,
      title: "Learn React basics",
      completed: true,
      priority: "high",
      category: "Learning",
    },
    {
      id: 2,
      title: "Build TaskFlow app",
      completed: false,
      priority: "high",
      category: "Learning",
    },
    {
      id: 3,
      title: "Master JSX syntax",
      completed: false,
      priority: "medium",
      category: "Learning",
    },
    {
      id: 4,
      title: "Style the app",
      completed: false,
      priority: "low",
      category: "Learning",
    },
    {
      id: 5,
      title: "Buy groceries",
      completed: false,
      priority: "medium",
      category: "Personal",
    },
    {
      id: 6,
      title: "Call dentist",
      completed: true,
      priority: "low",
      category: "Personal",
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [priority, setPriority] = useState<Priority>("medium");
  const [category, setCategory] = useState("");
  const [taskFilter, setTaskFilter] = useState<Filter>("all");

  const completedCount = tasks.filter((task) => task.completed).length;

  const categories = [...new Set(tasks.map((task) => task.category))];

  function handleToggle(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function addTask(title: string) {
    if (!title.trim()) {
      return;
    }

    const newTask: Task = {
      id: tasks.length + 1,
      title: title.trim(),
      completed: false,
      priority,
      category: category,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);

    // Reset form
    setPriority("low");
    setCategory("");
  }

  function handleDelete(id: number) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === "active") return !task.completed;
    if (taskFilter === "completed") return task.completed;
    return true; // "all"
  });

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <Header
        title="TaskFlow"
        completedCount={completedCount}
        totalCount={tasks.length}
      />

      <AddTaskForm
        priority={priority}
        setPriority={setPriority}
        category={category}
        setCategory={setCategory}
        handleSubmit={addTask}
      />

      <FilterTasks taskFilter={taskFilter} setTaskFilter={setTaskFilter} />

      <main>
        {categories.map((category) => (
          <section key={category} style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontSize: "18px",
                marginBottom: "8px",
                color: "#4b5563",
              }}
            >
              {category}
            </h2>

            <TaskList
              tasks={filteredTasks.filter((task) => task.category === category)}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
