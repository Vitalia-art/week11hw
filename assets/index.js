const addButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        
        newTask.addEventListener('click', () => {
            newTask.classList.toggle('completed');
        });

        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});