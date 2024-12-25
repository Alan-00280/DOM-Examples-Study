const paragraph = document.querySelector('.para');
document.querySelector('button').addEventListener('click', (e) => {
    if(e.target.matches('button')){
        if(paragraph.classList.contains('hidden')){
            paragraph.classList.remove('hidden');
            e.target.innerText = 'Hide Content';
            return;
        }
        paragraph.classList.add('hidden');
        e.target.innerText = 'Reveal Content';
    }
});