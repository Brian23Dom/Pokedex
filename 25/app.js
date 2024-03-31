
const form = document.querySelector('form');
const dbUrl = 'http://localhost:3000/tasks';

function renderTasks(responseJson) {
    for (let i = 0; i < responseJson.length; i++) {
        const task = document.createElement('div');
        const taskHtml = `  
    <span>${responseJson[i].task}</span>
    <span>${responseJson[i].status}</span>
    <button id="edit"-${responseJson[i].id}>Editar</button>
    <button>Eliminar</button>
    `
        task.innerHTML = taskHtml;
        task.setAttribute('id', `task-${responseJson[i].id}`);
        tasksContainer.appendChild(task);
        const editBtn = document.querySelector(`#edit-${responseJson[i].id}`)
        editBtn.addEventListener('click', (e) => {
            const buttonClickedId = e.target;
            const id = buttonClickedId.slice(5)
            console.log(buttonClicked);
            const taskToEdit = document.querySelector(`#task-${id}`);
            taskToEdit.innerHTML = `
    <input type="text" id="edit-input-${id}"></input>
    <button id="edit-done-${id}">Listo!</button>
    `

            const editDone = document.querySelector(`#edit-done-${id}`);
            const editInput = document.querySelector(`#edit-input-${id}`);
            editDone.addEventListener('click', () => {
                const editeBody = editBtn.value;
            })
        })
    }

}

async function getAllTasks() {
    const response = await fetch(dbUrl);
    const responseJson = response.json();
    console.log(responseJson);
    renderTasks(responseJson);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputTaskBody = document.querySelector('#taskBody');
    const taskBody = inputTaskBody.value;
    const taskId = allTasksJson.length + 1;
    const configPost = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task: editeBody
        })
    };
    const rawResponse = await fetch(dbUrl, configPost);
    const content = await rawResponse.json;

    setTimeout(() => {
        console.log();
    }
    )
})
getAllTasks();