const TASKS_KEY = "interactive_planner_tasks";

export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function loadTasks() {
  const saved = localStorage.getItem(TASKS_KEY);
  return saved ? JSON.parse(saved) : null;
}