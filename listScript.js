// script.js
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
let tasks = [];

// Add task functionality
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        // li.classList.add('task');
        li.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

//Delete task using event delegation
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

// Store tasks in an array and sync with DOM
// addTaskBtn.addEventListener('click', () => {
//     const taskText = taskInput.value.trim();
//     if (taskText) {
//         tasks.push(taskText);
//         updateTaskList();
//         taskInput.value = '';
//     }
// });

// function updateTaskList() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span>${task}</span>
//             <button class="delete-btn" data-index="${index}">Delete</button>
//         `;
//         taskList.appendChild(li);
//     });
// }

// Toggle task completion
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle('completed');
    }
});