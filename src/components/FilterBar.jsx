import React from "react";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("today")}>Today</button>
      <button onClick={() => setFilter("todo")}>To Do</button>
      <button onClick={() => setFilter("done")}>Done</button>
    </div>
  );
}

export default FilterBar;