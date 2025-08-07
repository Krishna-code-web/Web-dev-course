document.addEventListener("DOMContentLoaded", function () {
  let todoInput = document.getElementById("todo-input");
  let taskButton = document.querySelector("#add-task-btn");
  let todoList = document.querySelector("#todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => renderTask(task));

  taskButton.addEventListener("click", function () {
    let text = todoInput.value.trim();
    todoInput.value = "";
    if (text == "") return;

    let task = {
      taskId: Date.now(),
      taskText: text,
      completed: false,
    };

    tasks.push(task);
    saveTasks();
    renderTask(task);
  });

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTask(task) {
    let listElement = document.createElement("li");
    listElement.setAttribute("taskID", task.taskId);

    listElement.innerHTML = `
        <span>${task.taskText}</span>
        <button>delete</button>
    `;

    let span = listElement.querySelector('span')
    if(task.completed) span.classList.add('toggleLine');
    todoList.appendChild(listElement);
    
    span.addEventListener('click', function(){
        span.classList.toggle('toggleLine');
    })
    removeTask(listElement, task);
  }

  function removeTask(listElement,task){
    listElement.querySelector("button").addEventListener('click',function(e){
        e.stopPropagation();
        tasks = tasks.filter((t) => t.taskId !== task.taskId);
        console.log(tasks);
        listElement.remove();
        saveTasks();
    })
  }

});
