function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const colorfulColors = ['red', 'blue', 'green', 'purple', 'yellow', 'cyan', 'wheat'];
document.querySelector('.olahraga').addEventListener('click', (e)=>{if(e.target.className.match('olga')){e.target.style.backgroundColor=colorfulColors[getRandomInt(7)]; e.target.style.color='white';}});

// (e.target.match('.olga'))?console.log(colorfulColors[getRandomInt(4)]):none