import{
    createElement,
    completeTasks,
    todoTask,
    allTask,
    getTasksFromStorage,
   
}from "./localstorage.js"

const create=document.querySelector(".add")
const complete=document.querySelector(".complete-btn")
const todo=document.querySelector(".todo")
const all=document.querySelector(".All")
create.addEventListener("click",()=>
{

    createElement();
  
})
complete.addEventListener("click",()=>
{
  
    
    completeTasks();
})
todo.addEventListener("click",todoTask)
all.addEventListener("click",allTask)
