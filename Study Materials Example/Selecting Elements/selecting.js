/*Selecting element Methods*/
//.getElementById()
const title = document.getElementById('main-heading');
console.log(title);

//.getElementsByClassName()
const listItems_1 = document.getElementsByClassName('list-item');
console.log(listItems_1);

//.getElementsByTag()
const listItems_2 = document.getElementsByTagName('li');
console.log(listItems_2);

//.querySelector()
const first_container = document.querySelector('div');
console.log(first_container);

//.querySelectorAll()
const all_containers = document.querySelectorAll('div');
console.log(all_containers);