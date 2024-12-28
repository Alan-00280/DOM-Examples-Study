const contentContainer = document.getElementsByClassName('content-container');

for (let i = 0; i<contentContainer.length; i++){
    contentContainer[i].addEventListener('click', () => {
        contentContainer[i].classList.toggle('active');
    })
}
