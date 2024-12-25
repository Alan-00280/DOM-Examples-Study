//Selecting
const mainHeading = document.querySelector("#main-heading");
const listItems = document.querySelectorAll('.list-item');
const ul = document.querySelector('#ul-01');
const firstItem = document.querySelector('li');

//Creating
const lastItem = document.createElement('li');

//Selecting text
console.log(firstItem.innerText);
console.log(firstItem.textContent);
console.log(firstItem.innerHTML);

/*------------Modifying--------------*/
//1. Styling
mainHeading.style.color = 'blue';

for (i=0; i<listItems.length; i++){
    listItems[i].style.fontSize = '1.15rem';
}

console.log(ul);

//2. Text
lastItem.innerText = 'Sandy';
console.log(lastItem.innerText);

lastItem.textContent = 'Mrs. Puff';
console.log(lastItem.textContent);

lastItem.innerHTML = '<span>Agus</span> alex';
console.log(lastItem.innerHTML);

//3. Attributes and Classes
lastItem.setAttribute('id', 'i-last');
console.log(lastItem.getAttribute('id'));
lastItem.removeAttribute('id');

lastItem.setAttribute('className', 'list-item');
console.log(lastItem.getAttribute('className'));


lastItem.classList.add('not-right');
console.log(lastItem.classList.contains('not-right'));

lastItem.classList.remove('not-right');
console.log(lastItem.classList.contains('not-right'));

//Adding
ul.append(lastItem);

//Removing
//lastItem.remove();
