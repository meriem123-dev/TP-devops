export function createTask({
  title = "",
  description = "",
  dueDate = "",
  priority = "",
  done = false,
}) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    dueDate,
    priority,
    done,
  };
}
