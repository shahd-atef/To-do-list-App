const input=document.querySelector(".input")
const create=document.querySelector(".add")
const showtask=document.querySelector(".show-tasks")
const complete=document.querySelector(".complete-btn")
const todo=document.querySelector(".todo")
const all=document.querySelector(".All")
let arrayoftasks=[]

let date=new Date();
let format=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()},${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

function createElement()
{
    if(input.value !== "")
    {
        AddTaskToarray(input.value)
        input.value=""
    }
}
function AddTaskToarray(tasktext)
{
    const usertask={
        id:arrayoftasks.length,
       title:tasktext,
       Completed:false,
   createAt:format,
     }
 arrayoftasks.push(usertask)

AddElementTostorage(arrayoftasks)
AddElemntTodocument(arrayoftasks)
}

    function AddElementTostorage(arrayoftasks)
{
    localStorage.setItem("storedTasks",JSON.stringify(arrayoftasks))
}
 function AddElemntTodocument(arrayoftasks)
 {
    showtask.innerHTML=""
    arrayoftasks.forEach(task => {
       const parentcontainer=document.createElement('div');
      
       parentcontainer.className="task"
       const child=document.createElement('div')
       child.className='text-container'
    const title=document.createElement('p')
   const texttitle=document.createTextNode(task.title)
   title.appendChild(texttitle)
    const Date=document.createElement('span')
   const Datetext=document.createTextNode(task.createAt)
   Date.appendChild(Datetext)
    child.appendChild(title)
     child.appendChild(Date);
     parentcontainer.appendChild(child)

     const checkdiv=document.createElement('div')
     checkdiv.classList.add("checkbox");
     parentcontainer.appendChild(checkdiv)
     if (task.Completed) {
       checkdiv.classList.add("completed");
       parentcontainer.classList.add("completed-task");
   }
   checkdiv.addEventListener("click", () => {
       task.Completed = !task.Completed;
       if (task.Completed) {
           checkdiv.classList.add("completed");
           parentcontainer.classList.add("completed-task");
       }
       else {
           checkdiv.classList.remove("completed");
           parentcontainer.classList.remove("completed-task");
       }
       AddElementTostorage(task);
   });
   showtask.appendChild(parentcontainer)

       
   });

 }

 function getTasksFromStorage() {
    let data=localStorage.getItem("storedTasks")
    if(data)
    {
        let tasks=JSON.parse(data)
        AddElemntTodocument(tasks)
    }
  
}

function completeTasks()
{
    const complete=arrayoftasks;
    const afterfiltering=complete.filter(task=>task.Completed)
   AddElemntTodocument(afterfiltering)
}

function todoTask()
{
    const todo=arrayoftasks;
    const afterfiltering=todo.filter(task=>task.Completed===false)
   AddElemntTodocument(afterfiltering)
}
function allTask()
{
    AddElemntTodocument(arrayoftasks)
}
export
{
    createElement,
    completeTasks,
    todoTask,
    allTask,
    getTasksFromStorage,
}