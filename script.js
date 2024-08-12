const form = document.getElementById('task-form');
const list = document.getElementById('task-list');

form.onsubmit = e => {
    e.preventDefault();
    const input = document.getElementById('new-task');
    const taskText = input.value.trim();
    if (taskText) {
        list.innerHTML += `
            <li>
                ${taskText} 
                <div class="task-actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </li>`;
        input.value = '';
    }
};

list.onclick = e => {
    const target = e.target;
    const li = target.closest('li');
    if (target.classList.contains('delete')) {
        li.remove();
    } else if (target.classList.contains('edit')) {
        const newText = prompt('Edit task:', li.firstChild.textContent);
        if (newText) li.firstChild.textContent = newText.trim();
    } else if (target.tagName === 'LI') {
        li.classList.toggle('completed');
    }
};
