const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
console.log(gridSection.length);
console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkinterno = document.querySelector('[href^="#"]');
console.log(linkinterno);
console.log(linkinterno.href);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

primeiraUl.classList.add('grid-section');

gridSectionNode.forEach(function(item, index) {
    console.log(index);
});


const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item) {
    console.log(item);
})