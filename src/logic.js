import { createProject } from "./project";

let projects = [];

export function getProjects() {
  return projects;
}

export function setProjects(projs) {
  projects = projs;
}

export function addProject(proj) {
  projects.push(proj);
}

export function addTodo(prjId, todo) {
  const prj = projects.find((p) => p.id === prjId);
  if (prj) {
    prj.todos.push(todo);
  }
}

export function toggleDone(prjId, todoId) {
  const prj = projects.find((p) => p.id === prjId);
  if (prj) {
    const todo = prj.todos.find((t) => t.id === todoId);
    if (todo) {
      todo.done = !todo.done;
    }
  }
}

export function updateTodo(todoId, prjId, updated) {
  proj = projects.find((p) => p.id === prjId);
  if (proj) {
    const todo = proj.todos.find((t) => t.id == todoId);
    if (todo) {
      todo.title = updated.title;
      todo.description = updated.description;
      todo.dueDate = updated.dueDate;
      todo.priority = updated.priority;
      todo.done = updated.done;
    }
  }
}

export function deleteTodo(prjId, todoId) {
  const prj = projects.find((p) => p.id === prjId);
  if (prj) {
    const todo = prj.todos.find((t) => t.id === todoId);
    if (todo) {
      prj.todos.filter((t) => t.id !== todoId);
    }
  }
}

export function initDefault() {
  if (projects.length === 0) {
    const prj = createProject({ name: "Default" });
    projects.push(prj);
  }
}
