import { getProjects } from "./logic";


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

export function renderTodos(todos)
{
    const ul=document.getElementById("tasks");
    ul.innerHTML="";
    for(const t of todos){
        const li=document.createElement("li");
        li.textContent=`${t.title} - ${t.dueDate}`;
        const check = document.createElement("input");
        check.type="checkbox";
        check.checked=t.done;
        li.appendChild(check);
        ul.appendChild(li);

    }
}