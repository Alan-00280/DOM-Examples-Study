const showBtn = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-container');

showBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', ()=> {modalContainer.style.display = 'none'});

window.addEventListener('click', (e) => {(e.target === modalContainer)? modalContainer.style.display = 'none' : none})
