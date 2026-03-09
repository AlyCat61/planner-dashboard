import React from "react";

function StatsCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const todo = tasks.filter((task) => !task.done).length;
  const reminders = tasks.filter((task) => task.remind && !task.done).length;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total</h3>
        <p>{total}</p>
      </div>
      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>
      <div className="stat-card">
        <h3>To Do</h3>
        <p>{todo}</p>
      </div>
      <div className="stat-card">
        <h3>Reminders</h3>
        <p>{reminders}</p>
      </div>
    </div>
  );
}

export default StatsCards;