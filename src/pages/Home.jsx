import React, { useEffect, useMemo, useState } from "react";
import PlannerForm from "../components/PlannerForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import StatsCards from "../components/StatsCards";
import { sampleTasks } from "../data/sampleTasks";
import { todayString } from "../utils/dateHelpers";
import { loadTasks, saveTasks } from "../utils/storage";

function Home() {
  const [tasks, setTasks] = useState(() => loadTasks() || sampleTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }

  function toggleDone(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const filteredTasks = useMemo(() => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const first = `${a.date || ""} ${a.time || "99:99"}`;
      const second = `${b.date || ""} ${b.time || "99:99"}`;
      return first.localeCompare(second);
    });

    if (filter === "today") {
      return sortedTasks.filter((task) => task.date === todayString());
    }
    if (filter === "todo") {
      return sortedTasks.filter((task) => !task.done);
    }
    if (filter === "done") {
      return sortedTasks.filter((task) => task.done);
    }

    return sortedTasks;
  }, [tasks, filter]);

  return (
    <div className="home">
      <header className="hero">
        <h1>Interactive Planner</h1>
        <p>Organize tasks, plan ahead, and keep up with your day.</p>
      </header>

      <StatsCards tasks={tasks} />

      <div className="main-layout">
        <PlannerForm onAddTask={addTask} />

        <div className="tasks-section">
          <FilterBar filter={filter} setFilter={setFilter} />
          <TaskList
            tasks={filteredTasks}
            onToggleDone={toggleDone}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;