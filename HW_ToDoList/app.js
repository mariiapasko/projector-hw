'use strict'

const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const filterInput = document.querySelector(".filter-input");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

document.addEventListener("DOMContentLoaded", showTasks);
form.addEventListener("submit", addTask);
taskList.addEventListener('click', deleteTask);
clearBtn.addEventListener('click', deleteAllTasks);
filterInput.addEventListener("keyup", filterTasks);


function showTasks() {
    if (localStorage.getItem("tasks") !== null) {
        const tasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.forEach((task) => {
            const li = document.createElement("li");
            li.innerHTML = task;

            const button = document.createElement("button");
            button.innerHTML = "x";
            button.classList.add('btn-delete');
            li.append(button);

            taskList.append(li);

        });
    }
}
function addTask(event) {
    event.preventDefault();

    const value = taskInput.value;
    const li = document.createElement("li");
    li.innerHTML = value;

    const button = document.createElement("button");
    button.classList.add('btn-delete');
    button.innerHTML = "x";

    li.append(button);
    taskList.append(li);

    storeTaskInLocalStorage(value);
    taskInput.value = "";
}


function storeTaskInLocalStorage(task) {

    let tasks;


    if (localStorage.getItem("tasks") !== null) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
        tasks = [];
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(event) {
    if (event.target.classList.contains("btn-delete")) {
        if (confirm('Are you sure that you want to delete this task?')) {
            event.target.closest("li").remove();
            removeTaskFromLocalStorage(event.target.closest("li").firstChild.textContent);
        }
    }
}

function removeTaskFromLocalStorage(taskContent) {


    if (localStorage.getItem("tasks") !== null) {
        const tasks = JSON.parse(localStorage.getItem("tasks"));

        const filteredTasks = tasks.filter((task) => task !== taskContent);
        localStorage.setItem("tasks", JSON.stringify(filteredTasks));

    }
};

function deleteAllTasks() {
    if (confirm('Do you really want to delete ALL the tasks?')) {
        taskList.innerHTML = '';
        removeAllTasksFromLocalStorage();
    }
}

function removeAllTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(event) {
    const tasks = taskList.querySelectorAll("li");
    const searchQuery = event.target.value.toLowerCase();
    tasks.forEach((task) => {
        const taskValue = task.firstChild.textContent.toLowerCase();

        if (taskValue.includes(searchQuery)) {
            task.style.display = "list-item";
        } else {
            task.style.display = "none";
        }
    });
}