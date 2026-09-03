import { useState, type FormEvent } from "react";
import Header from "./shared/components/Header/Header";
import TaskList from "./shared/components/TaskList/TaskList";
import type { Task } from "./shared/types/types";
import AddTaskForm from "./shared/components/AddTaskForm/AddTaskForm";

type Priority = "low" | "medium" | "high";

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

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [dueDate, setDueDate] = useState("");

  const completedCount = tasks.filter((task) => task.completed).length;

  const categories = [...new Set(tasks.map((task) => task.category))];

  function handleToggle(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newTask: Task = {
      id: tasks.length + 1,
      title: title.trim(),
      completed: false,
      priority,
      category: "Personal",
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);

    // Reset form
    setTitle("");
    setPriority("low");
    setDueDate("");
  }

  function handleDelete(id: number) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

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
        title={title}
        setTitle={setTitle}
        priority={priority}
        setPriority={setPriority}
        dueDate={dueDate}
        setDueDate={setDueDate}
        handleSubmit={handleSubmit}
      />

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
              tasks={tasks.filter((task) => task.category === category)}
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
