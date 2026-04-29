// Select elements
const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const dateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");
const taskList = document.getElementById("taskList");
const filterSelect = document.getElementById("filter");
const searchInput = document.getElementById("search");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function generateId() {
    return Date.now();
}


function addTask(e) {
    e.preventDefault();

    if (titleInput.value.trim() === "" || dateInput.value === "") {
        alert("Title and Due Date are required!");
        return;
    }

    const task = {
        id: generateId(),
        title: titleInput.value,
        description: descInput.value,
        dueDate: dateInput.value,
        priority: priorityInput.value
    };

    tasks.push(task);
    saveTasks();
    displayTasks();
    taskForm.reset();
}

function displayTasks(taskArray = tasks) {
    taskList.innerHTML = "";

    taskArray.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";

        li.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p><b>Due:</b> ${task.dueDate}</p>
            <p><b>Priority:</b> ${task.priority}</p>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}


function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    displayTasks();
}


function editTask(id) {
    const task = tasks.find(t => t.id === id);

    titleInput.value = task.title;
    descInput.value = task.description;
    dateInput.value = task.dueDate;
    priorityInput.value = task.priority;

    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    displayTasks();
}


function filterTasks() {
    const value = filterSelect.value;

    if (value === "all") {
        displayTasks();
    } else {
        const filtered = tasks.filter(t => t.priority === value);
        displayTasks(filtered);
    }
}


function searchTasks() {
    const query = searchInput.value.toLowerCase();

    const filtered = tasks.filter(t =>
        t.title.toLowerCase().includes(query)
    );

    displayTasks(filtered);
}


taskForm.addEventListener("submit", addTask);
filterSelect.addEventListener("change", filterTasks);
searchInput.addEventListener("keyup", searchTasks);


window.onload = () => displayTasks();