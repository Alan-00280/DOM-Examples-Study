const addTask = document.getElementById('add-task');
const inputedText = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

addTask.addEventListener('click',()=>{
    //makingtaskbox
    let taskBox = document.createElement('div');
    taskBox.classList.add('task');

    //makingtasktext
    let taskText = document.createElement('span');
    taskText.style.display = 'blok';
    taskText.innerText = inputedText.value;
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

    if(inputedText.value===""){
        alert('Please enter task'); return;
    }
    taskContainer.appendChild(taskBox);

    inputedText.value = "";

    //Function for check and delete btn
    checkBtn.addEventListener('click',()=>{
        taskBox.children[0].classList.toggle('done');
        taskBox.children[1].classList.toggle('done');
    })
    deleteBtn.addEventListener('click', ()=>{
        taskBox.remove();
    })
})

inputedText.addEventListener('keypress', (e)=>{
    if(e.key==='Enter'){e.preventDefault;addTask.click();return};
})

