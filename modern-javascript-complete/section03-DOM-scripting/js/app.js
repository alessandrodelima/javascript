/*
let element; 

element = document;
element = document.all; // deprecated
element = document.all[200];
element = document.head;
element = document.body;
element = document.domain;
element = document.URL;
element = document.characterSet;
element = document.contentType;;

// Links
element = document.links;
element = document.links[2];
element = document.links[2].id;
element = document.links[2].className;
element = document.links[2].classList;


// Forms 
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;
element = document.forms[0].classList;
element = document.forms[0].className;
element = document.forms[0].classList[0];

// Images
element = document.images;


//Scripts
element = document.scripts;
element = document.scripts[0].getAttribute('src');

// Looping all the images
let images = document.images;
let imagesArray = Array.from(images);

imagesArray.forEach(function(image) {
  //console.log(image);
  console.log(image.src);
});

console.log(imagesArray);

// Selecting DOM ELEMENTS

let heading = document.getElementById('heading');

console.log( heading);
console.log( heading.id );
console.log( heading.className );

// Change the CSS 
heading.style.background = '#333';
heading.style.color = '#fff';
heading.style.padding = '20px';
heading.style.marginTop = '50px';

//Change the text 
heading.textContent = 'The best courses';
//another way
heading.innerText = 'New heading';

// Query Selector 
const learningHeading = document.querySelector('#learn');
 
learningHeading.textContent = 'A new heading';

console.log(learningHeading);

//Select a class with query selector 
const tagline = document.querySelector('.tagline');

//const newText = tagline.textContent.replace('$15', '$12');
//tagline.textContent = newText;
//console.log(tagline);

let card = document.querySelector('.card');
console.log(card);

// selecting a tag 
let heading = document.querySelector('h2');
console.log(heading);



// Nest your selector with a CSS syntax. 
let image = document.querySelector('.card img');

console.log(image);


// Query selector supports nth-child, first-child or last-child
let link;

link = document.querySelector('#primary a'); 
link = document.querySelector('#primary a:first-child');
link = document.querySelector('#primary a:last-child');
link = document.querySelector('#primary a:nth-child(2)');
console.log(link);


// getElementByClassName
const links = document.getElementsByClassName('link');
links[0].style.color = 'red';
links[0].textContent = 'New Text';
links[0].style.background = 'black';

console.log(links);



const links = document.querySelector('#primary').getElementsByClassName('link');
const links = document.getElementById('primary').getElementsByClassName('link');

console.log(links);



// getElementByTagName
const images = document.getElementsByTagName('img');
//console.log(images);
//console.log(document.images);
//console.log(images[0]);


// Convert HTML collection int oan array
imagesArray = Array.from(images);

imagesArray.forEach(function(image) {
  console.log(image);
})
console.log(imagesArray);


const heading = document.getElementsByTagName('h1');

console.log(heading);

const cards = document.querySelector('.card');
const cards = document.querySelectorAll('.card');
console.log(cards);

const courses = document.querySelectorAll('.card h4');

const coursesArray = Array.from(courses);

coursesArray.forEach(function(course) {
  console.log(course.textContent);
})

console.log(courses);
console.log(courses[0]);


//Select odd links
const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

oddLinks.forEach(function(odd) {
  odd.style.background = 'red';
  odd.style.color = 'white';
});

// Select even links
const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');

evenLinks.forEach(function(even) {
  even.style.background = 'blue';
  even.style.color = 'white';

})


//Change all the add-to-cart button text
const addCartBtns = document.querySelectorAll('.add-to-cart');

addCartBtns.forEach(function(button) {
  button.textContent = 'Someting new';

})

console.log(addCartBtns);


// Traversing

const navigation = document.querySelector('#primary');
let element;

navigation.children[0].textContent = 'New Text';
element = navigation.childNodes;
element = navigation.children;
element = navigation.children[0].nodeName;
element = navigation.children[0].nodeType;
element = navigation.children[0];
element = navigation.children[4].children;




// 1 =  Element 
// 2 -  Atributes
// 3 =  Text Nodes
// 8 =  Comments
// 9 =  document
// 10 = doctype


console.log(element);


const coursesList = document.querySelector('#courses-list');
let element;

element = coursesList.SWchildren;
element = coursesList.children[4].children;
element = coursesList.children[1].children[1].children[0].children[1].firstElementChild;
element = coursesList.children[1].children[1].children[0].children[1].lastElementChild;
element = coursesList.children[1].children[1].children[0].children[1].childElementCount;

console.log(element);



// ======================== Traversing from the children to parent

const cartBtn = document.querySelector('.add-to-cart');

let element;


// Parent Node
element = cartBtn;
element = cartBtn.parentNode;
element = cartBtn.parentElement.parentElement;
element = cartBtn.parentElement.parentElement.children;
element = cartBtn.parentElement.parentElement.children[0];

// Sibling

element = cartBtn.parentNode;
element = cartBtn.previousSibling; 
element = cartBtn.previousElementSibling; 
element = cartBtn.previousElementSibling.previousElementSibling; 


//Course name 
const courseName = cartBtn.parentElement.querySelector('h4');

// Next element sibling 
element = cartBtn.nextElementSibling;
element = courseName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling;


//console.log(element);
console.log(courseName);
console.log(cartBtn.parentElement);


// ================================== Create a new element 
// create a new <a>
const newLink = document.createElement('a');

//add a class
newLink.className = 'link';

// add the href

//newLink.href = '#';
//newLink.href = 'http://www.google.com';
//newLink.href = 'index.html';
newLink.setAttribute('href', '#');

// add the text
newLink.appendChild( document.createTextNode('new Link'));

// Add the element to the HTML
document.querySelector('#primary').appendChild(newLink);


console.log(newLink);

// =====================================Replace an element

const newHeading = document.createElement('h2');

// add an id 
newHeading.id = 'heading';

// add the class 
newHeading.classList.add('heading');

// add the new text
newHeading.appendChild( document.createTextNode('The Best Courses'));

// Select the old heading 
const oldHeading = document.querySelector('#heading');

// Parent
const courseList = document.querySelector('#courses-list');

// Then, replace!
courseList.replaceChild(newHeading, oldHeading);


console.log(newHeading);



// ================== Remove Elements

const links = document.querySelectorAll('.link');

links[1].remove();

console.log(links);

const cards =  document.querySelectorAll('.card');
cards[11].remove()
console.log(cards);



// Remove by the children

const navigation = document.querySelector('#primary');
const links = document.querySelectorAll('#primary .link');

navigation.removeChild(links[3]);


console.log(links);
console.log(navigation);

*/

// ==================== Class, Ids & Attributes

const link = document.querySelector('.link');
let element;

// read the class 
element = link.className;

// Read the class (DOM Token List)
element = link.classList;

// Access specific class with classlist
element = link.classList[0];

// add a new class 
link.classList.add('new-class');

// remove the class
link.classList.remove('link');

//Ids
link.id = 'new-id';

// Remove the id 
link.id = '';
link.removeAttribute('id');

// Attribute function 
element = link.getAttribute('href');
element = link.getAttribute('class');
element = link.setAttribute('href', 'http://facebook.com');
element = link.setAttribute('target', '_blank');
element = link.setAttribute('data-link', '10');
element = link.hasAttribute('data-link');
element = link.removeAttribute('data-link');


console.log(element);

