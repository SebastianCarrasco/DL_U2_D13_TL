// Inicializar tareas
let tasks = [
    { id: 1, description: 'Realizar index.html', completed: false },
    { id: 2, description: 'Realizar styles.css', completed: false },
    { id: 3, description: 'Realizar script.js', completed: false },
];

// Referencias a los elementos del DOM
const taskList = document.getElementById('tasks');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');
const newTaskInput = document.getElementById('new-task');

// Función para renderizar la lista de tareas
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            ${task.description}
            <div>
                <button onclick="toggleTask(${task.id})">${task.completed ? 'Desmarcar' : 'Completar'}</button>
                <button class="delete" onclick="deleteTask(${task.id})">Eliminar</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateSummary();
}

// Función para agregar una nueva tarea
function addTask() {
    const description = newTaskInput.value.trim();
    if (description) {
        const newTask = {
            id: tasks.length + 1,
            description: description,
            completed: false
        };
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

// Función para eliminar una tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Función para marcar/desmarcar una tarea como completada
function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

// Función para actualizar el resumen de tareas
function updateSummary() {
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}

// Event listener para el botón de agregar tarea
document.getElementById('add-task').addEventListener('click', addTask);

// Renderizar la lista de tareas iniciales
renderTasks();
