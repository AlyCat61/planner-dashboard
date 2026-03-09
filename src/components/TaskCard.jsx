import React from "react";

function TaskCard({ task, onToggleDone, onDelete }) {
  return (
    <div className={`task-card ${task.done ? "done" : ""} priority-${task.priority.toLowerCase()}`}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <p>
        <strong>Date:</strong> {task.date || "No date"}
      </p>

      <p>
        <strong>Time:</strong> {task.time || "No time"}
      </p>

      {task.notes && (
        <p>
          <strong>Notes:</strong> {task.notes}
        </p>
      )}

      <p>
        <strong>Reminder:</strong> {task.remind ? "On" : "Off"}
      </p>

      <div className="task-buttons">
        <button onClick={() => onToggleDone(task.id)}>
          {task.done ? "Undo" : "Done"}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;