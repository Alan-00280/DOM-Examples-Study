//Bubbling phase (default)
/*
window.addEventListener('click', () => console.log(window));
document.addEventListener('click', () => console.log('document'));
document.querySelector('.div-2').addEventListener('click', () => console.log('div-2'));
document.querySelector('.div-1').addEventListener('click', () => console.log('div-1'));
document.querySelector('button').addEventListener('click', (e) => console.log(e));
*/

//Capturing phase
/*
window.addEventListener('click', () => console.log(window), true);
document.addEventListener('click', () => console.log('document'), true);
document.querySelector('.div-2').addEventListener('click', () => console.log('div-2'), true);
document.querySelector('.div-1').addEventListener('click', () => console.log('div-1'), true);
document.querySelector('button').addEventListener('click', (e) => console.log(e), true);*/

//Stoping propagation
/*
window.addEventListener('click', () => console.log(window), true);
document.addEventListener('click', () => console.log('document'), true);
document.querySelector('.div-2').addEventListener('click', () => console.log('div-2'), true);
document.querySelector('.div-1').addEventListener('click', (e) => e.stopPropagation(), true);
document.querySelector('button').addEventListener('click', (e) => console.log(e), true);*/

//Experiment
/*
document.querySelector('.div-2').addEventListener('mouseenter', (e) => {(e.target.matches('.div-2'))?console.log(e.target) : 0}, true);*/
