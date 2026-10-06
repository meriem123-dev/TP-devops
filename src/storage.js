const todo_app="";

export function save(projects){
    localStorage.setItem(todo_app,JSON.stringify(projects));
}

export function load(){
    try{
     return JSON.parse(localStorage.getItem(todo_app)) || [];
    }
    catch(e){
        console.error("error local storage :",e);
    }
    
}