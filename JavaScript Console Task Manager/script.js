// ==========================================
// JAVASCRIPT CONSOLE TASK MANAGER CAPSTONE
// ==========================================

// Global tasks array
let tasks = [];

// 1. Add a new task
function addTask(title, priority) {
    let newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false,
        priority: priority
    };
    tasks.push(newTask);
    console.log(`Success: Task "${title}" added successfully!`);
}

// 2. View all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available");
        return;
    }
    console.log("--- ALL TASKS ---");
    for (let i = 0; i < tasks.length; i++) {
        let t = tasks[i];
        console.log(`ID: ${t.id} | Title: ${t.title} | Completed: ${t.completed} | Priority: ${t.priority}`);
    }
}

// 3. Complete a task by ID
function completeTask(id) {
    let found = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            console.log(`Success: Task ID ${id} marked as completed!`);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Task not found");
    }
}

// 4. Delete a task by ID
function deleteTask(id) {
    let oldLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    if (tasks.length < oldLength) {
        console.log("Task deleted successfully");
    } else {
        console.log("Task not found");
    }
}

// 5. View pending tasks
function viewPendingTasks() {
    let pendingTasks = tasks.filter(task => task.completed === false);
    if (pendingTasks.length === 0) {
        console.log("No pending tasks");
    } else {
        console.log("--- PENDING TASKS ---");
        pendingTasks.forEach(t => console.log(`ID: ${t.id} | Title: ${t.title} | Priority: ${t.priority}`));
    }
}

// 6. View completed tasks
function viewCompletedTasks() {
    let completedTasks = tasks.filter(task => task.completed === true);
    if (completedTasks.length === 0) {
        console.log("No completed tasks");
    } else {
        console.log("--- COMPLETED TASKS ---");
        completedTasks.forEach(t => console.log(`ID: ${t.id} | Title: ${t.title} | Priority: ${t.priority}`));
    }
}

// 7. Search tasks by keyword
function searchTask(keyword) {
    let lowerKeyword = keyword.toLowerCase();
    let matchingTasks = tasks.filter(task => task.title.toLowerCase().includes(lowerKeyword));
    if (matchingTasks.length === 0) {
        console.log("No matching task found");
    } else {
        console.log(`--- SEARCH RESULTS FOR "${keyword}" ---`);
        matchingTasks.forEach(t => console.log(`ID: ${t.id} | Title: ${t.title} | Completed: ${t.completed} | Priority: ${t.priority}`));
    }
}

// 8. Update task title
function updateTask(id, newTitle) {
    let found = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].title = newTitle;
            console.log("Task updated successfully");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Task not found");
    }
}

// 9. Count total, completed, and pending tasks
function countTasks() {
    let total = tasks.length;
    let completed = tasks.filter(task => task.completed === true).length;
    let pending = tasks.filter(task => task.completed === false).length;
    console.log(`Total Tasks: ${total}, Completed Tasks: ${completed}, Pending Tasks: ${pending}`);
}

// 10. Sort tasks by priority (high > medium > low)
function sortByPriority() {
    let priorityOrder = { high: 1, medium: 2, low: 3 };
    
    // Create a copy to sort so original order isn't permanently mutated unexpectedly
    let sortedTasks = [...tasks].sort((a, b) => {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    console.log("--- TASKS SORTED BY PRIORITY ---");
    sortedTasks.forEach(t => console.log(`ID: ${t.id} | Title: ${t.title} | Priority: ${t.priority} | Completed: ${t.completed}`));
}


// ==========================================
// TEST SCRIPT (Following instructions)
// ==========================================

console.log("--- TESTING THE TASK MANAGER ---");
addTask("Finish JavaScript Assignment", "high");
addTask("Buy groceries", "medium");
addTask("Pay electricity bill", "high");
addTask("Clean room", "low");
addTask("Read a book", "low");

viewTasks();

completeTask(1);
completeTask(3);

viewCompletedTasks();
viewPendingTasks();

searchTask("groceries");
updateTask(2, "Buy fresh groceries and milk");
deleteTask(5);

countTasks();
sortByPriority();