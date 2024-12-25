let ul = document.querySelector('ul');
let div = document.querySelector('div');

//Parent
//Node
console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);
//Element
console.log(ul.parentElement);

//Child
//Node
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
//Element
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//Sibling
//Node
console.log(ul.previousSibling);
console.log(ul.nextSibling);
//Element
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
