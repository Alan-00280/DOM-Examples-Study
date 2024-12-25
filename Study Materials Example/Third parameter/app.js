//e for changing target properties
document.querySelector('.div-1').addEventListener('click', (e) => {e.target.innerText='You Clicked Me!'}, true);

//{once:true}
let a=0; let b=0;
document.querySelector('.once-true').addEventListener('click', (e) => {(e.target.matches('.once-box')) ? console.log(e.target.children[0].innerText = ++a):console.log(e.target.innerText = ++a)}, {once:true}); //once:true

document.querySelector('.once-false').addEventListener('click', (e) => {(e.target.matches('.once-box')) ? console.log(e.target.children[0].innerText = ++b):console.log(e.target.innerText = ++b)}); //none


//Prevent default
document.querySelector('.moded-a').addEventListener('click', (e)=>e.preventDefault())
