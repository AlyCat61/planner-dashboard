import React, { useState } from "react";

function PlannerForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("Low");
  const [notes, setNotes] = useState("");
  const [remind, setRemind] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      date,
      time,
      priority,
      notes: notes.trim(),
      done: false,
      remind,
    };

    onAddTask(newTask);

    // Reset form
    setTitle("");
    setDate("");
    setTime("");
    setPriority("Low");
    setNotes("");
    setRemind(false);
  }

  return (
    <form className="planner-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={remind}
            onChange={(e) => setRemind(e.target.checked)}
          />
          Set Reminder
        </label>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default PlannerForm;