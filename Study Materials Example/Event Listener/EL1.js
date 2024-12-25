//Using addEventListener
const buttonTwo = document.querySelector('#btn-2');
buttonTwo.addEventListener('click', () => alert('Example 2 is clicked using Javascript event listener'));

//Other event: mouseover mouseout
const exampleBox = document.querySelector('.example');
exampleBox.addEventListener('mouseover', () => exampleBox.style.backgroundColor = 'blue');
exampleBox.addEventListener('mouseout', () => exampleBox.style.backgroundColor = 'white');
