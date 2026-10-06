import {
  addProject,
  addTodo,
  deleteTodo,
  getProjects,
  initDefault,
  setProjects,
  toggleDone,
  updateTodo,
} from "./logic.js";
import { createTask } from "./todo.js";
import { createProject } from "./project.js";
import { load, save } from "./storage.js";
import { renderProjects, renderTodos } from "./dom.js";

let currentProjectId = null;

function render() {
  renderProjects(getProjects(), (id) => {
    currentProjectId = id;
    render();
  });
  const prj = getProjects().find((p) => p.id === currentProjectId);
  renderTodos(prj ? prj.todos : [], {
    onToggle: (todoId) => {
      toggleDone(currentProjectId, todoId);
      save(getProjects());
      render();
    },
    onEdit: startEdit,
  });
}

const projectForm = document.getElementById("new-project");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(projectForm));
  addProject(createProject(data));
  save(getProjects());
  render();
  projectForm.reset();
});

const taskForm = document.getElementById("new-task");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(taskForm));
  addTodo(currentProjectId, createTask(data));
  save(getProjects());
  render();
  taskForm.reset();
});

let editingId = null;
const editForm = document.getElementById("edit-task");

function startEdit(todo) {
  editingId = todo.id;
  editForm.title.value = todo.title;
  editForm.description.value = todo.description;
  editForm.dueDate.value = todo.dueDate;
  editForm.priority.value = todo.priority;
  editForm.hidden = false;
}

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(editForm));
  updateTodo(editingId, currentProjectId, data);
  save(getProjects());
  editForm.hidden = true;
  editingId = null;
  render();
});

document.getElementById("cancel-edit").addEventListener("click", () => {
  editForm.hidden = true;
  editingId = null;
});

setProjects(load());
initDefault();
currentProjectId = getProjects()[0].id;
render();
console.log(getProjects());
