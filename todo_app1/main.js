
let tasks = [];


function renderTasks() {
    const taskList = document.getElementById('task-list'); 
    taskList.innerHTML = ''; 

    tasks.forEach((task,index) =>{
        const li = document.createElement('li');
        li.innerHTML=` <span>${task}</span>
        <button onclick="deleteTask(${index})">削除</button>
        `;
        taskList.appendChild(li);
    });
}

    

// 新しいタスクを追加
document.getElementById('add-task').addEventListener('click', () => {
    const title = document.getElementById('new-task').value.trim(); // 入力されたタスクを取得
    if (!title) return; 
    tasks.push(title); 
    document.getElementById('new-task').value = '';
    renderTasks();

// タスクを削除
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks(); 

// 初期化
renderTasks();