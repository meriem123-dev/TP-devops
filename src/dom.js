import { getProjects, updateTodo } from "./logic";


export function renderProjects(projects,onselect)
{
    const ul=document.getElementById("projects");
    ul.innerHTML="";
    for (const pr of projects){
        const li=document.createElement("li");
        li.textContent= pr.name;
         li.addEventListener("click",()=>onselect(pr.id));
        ul.appendChild(li);
    }


}

export function renderTodos(todos,{onToggle,onEdit})
{
    const ul=document.getElementById("tasks");
    ul.innerHTML="";
    for(const t of todos){
        const li=document.createElement("li");
        li.textContent=`${t.title} - ${t.dueDate}`;
        const check = document.createElement("input");
        check.type="checkbox";
        check.checked=t.done;
        check.addEventListener("change",()=>onToggle(t.id));

        const updateBtn= document.createElement("button");
        updateBtn.textContent="modifier";
        updateBtn.addEventListener("click",() => onEdit(t));
        li.appendChild(check);
        li.appendChild(updateBtn);
        ul.appendChild(li);

    }
}