const form = document.querySelector("#form");
const clearBtn = document.querySelector(".clear");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
// const Hello = "welcome";
// console.log(Hello);

// declare load event.....................................
loadEventListeners();

// load all event listeners..................................
function loadEventListeners() {
  // DOM load events........................
  document.addEventListener("DOMContentLoaded", getTasks);
  // add tasks form.................
  form.addEventListener("submit", addTask);

  //   remove task event...................
  taskList.addEventListener("click", removeTask);

  //   clear task event...........................
  clearBtn.addEventListener("click", clearTasks);

  //   filter tasks events.....................

  filter.addEventListener("keyup", filterTask);
}
// get tasks from LS...................................
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    //   create li element...............................
    const li = document.createElement("li");
    // add element class.................................
    li.className = "collection-items";
    //   create textnode and append it to li..........................

    li.appendChild(document.createTextNode(task));

    //   create link.............................................

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    //   add icon to the link.........................
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //   append link to li......................................

    li.appendChild(link);

    //   append li to ul

    taskList.appendChild(li);
  });
}
function addTask(e) {
  if (taskInput.value === "") {
    alert("add a task");
    // console.log("Hi");
  }

  e.preventDefault();

  //   create li element...............................
  const li = document.createElement("li");

  // add element class.................................
  li.className = "collection-items";

  //   create textnode and append it to li..........................

  li.appendChild(document.createTextNode(taskInput.value));

  //   create link.............................................

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  //   add icon to the link.........................
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //   append link to li......................................

  li.appendChild(link);

  //   append li to ul

  taskList.appendChild(li);
  // store in LS......................
  storeTaskInLocalStorage(taskInput.value);
  //   cleartask..................................................

  taskInput.value = "";
}
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function removeTask(e) {
  //   alert("Hello World");
  e.preventDefault();
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure")) {
      e.target.parentElement.parentElement.remove();

      // remove task for LS......................
      function removeTaskFromLocalStorage(taskItem) {
        let tasks;
        if (localStorage.getItem("tasks") === null) {
          tasks = [];
        } else {
          tasks = JSON.parse(localStorage.getItem("tasks"));
        }
        tasks.forEach(function (task, index) {
          if (taskItem.textContent === task) {
            tasks.splice(index, 1);
          }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    }
  }
}

function clearTasks(e) {
  e.preventDefault();
  //   taskList.innerHTML = "";

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clear task from LS.........................
  clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
function filterTask(e) {
  e.preventDefault();
  const text = e.target.value.toLowerCase();
  //   console.log(text);
  document.querySelectorAll(".collection-items").forEach(function (task) {
    const item = task.firstChild.textContent;
    console.log(item);
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  //   document.querySelectorAll(".collection-items").forEach((task) => {
  //     const item = task.firstChild.textContent;
  //     if (item.toLowerCase().indexOf(text) != -1) {
  //       task.style.display = "block";
  //     } else {
  //       task.style.display = "none";
  //     }
  //   });
}
