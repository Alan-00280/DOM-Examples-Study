const addTask = document.getElementById('add-task');
const inputedText = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

//initialize ID
if(sessionStorage.getItem("ID")){
} else {
    sessionStorage.setItem("ID", "0");
}

function renderTask(){
    taskContainer.innerHTML = "";

    //Looping through each key-value sessionStorage object
    Object.keys(sessionStorage).forEach((key)=>{
        if(key=="ID" || key=="refreshed"){
            return;
        }
        //makingtaskbox
        let taskBox = document.createElement('div');
        taskBox.classList.add('task');
        taskBox.setAttribute("id", key);

        //makingtasktext
        let taskText = document.createElement('span');
        taskText.style.display = 'blok';
        taskText.innerText = sessionStorage.getItem(key);
        taskBox.appendChild(taskText);

        //makingcheckandremovebutton
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        checkBtn.classList.add('checkTask');
        taskBox.appendChild(checkBtn);
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        deleteBtn.classList.add('deleteTask');
        taskBox.appendChild(deleteBtn);

        taskContainer.appendChild(taskBox);

        inputedText.value = "";

        //Function for check and delete btn
        checkBtn.addEventListener('click',()=>{
            taskBox.children[0].classList.toggle('done');
            taskBox.children[1].classList.toggle('done');
        })
        deleteBtn.addEventListener('click', ()=>{
            sessionStorage.removeItem(taskBox.id);
            taskBox.remove();
        })
    })
}

addTask.addEventListener('click',()=>{
    if(inputedText.value===""){
        alert('Please enter task'); return;
    }

    //Adding task to sessionStorage
    let id = parseInt(sessionStorage.getItem("ID"));
    id++;
    sessionStorage.setItem(id.toString(), inputedText.value);
    sessionStorage.setItem("ID", id);

    //Render from the session storage
    renderTask();    
})

window.onload = function () {
    if(sessionStorage.getItem("refreshed")){
        renderTask();
    } else {
        sessionStorage.setItem("refreshed", "true");
    }
}

inputedText.addEventListener('keypress', (e)=>{
    if(e.key==='Enter'){e.preventDefault;addTask.click();return};
})

