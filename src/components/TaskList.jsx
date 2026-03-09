import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, onToggleDone, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;