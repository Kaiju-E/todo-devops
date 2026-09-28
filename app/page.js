"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish assignment", completed: false },
    { id: 2, text: "Study Next.js", completed: false },
    { id: 3, text: "Setup Git repository", completed: true }
  ]);
  const [taskText, setTaskText] = useState("");

  function addTask(event) {
    event.preventDefault();
    const text = taskText.trim();

    if (!text) return;

    setTasks((current) => [
      ...current,
      { id: Date.now(), text, completed: false }
    ]);
    setTaskText("");
  }

  function toggleTask(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <main className="page">
      <section className="todo-card">
        <div className="header">
          <p className="label">DEVOPS APPLICATION</p>
          <h1>ToDo Application</h1>
          <p className="subtitle">
            Add, complete, and delete your tasks.
          </p>
        </div>

        <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="Enter a task..."
            aria-label="Task"
          />
          <button type="submit">Add Task</button>
        </form>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty">No tasks yet. Add your first task!</p>
          ) : (
            tasks.map((task) => (
              <div className="task" key={task.id}>
                <label className="task-content">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span className={task.completed ? "completed" : ""}>
                    {task.text}
                  </span>
                </label>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <footer>
          <span>{tasks.filter((task) => !task.completed).length} active</span>
          <span>{tasks.length} total</span>
        </footer>
      </section>
    </main>
  );
}
