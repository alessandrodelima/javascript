// ==========================================local Storage
/*
// Add to local storage

localStorage.setItem('name', 'Alessandro');

// add to session storage

sessionStorage.setItem('name', 'Alessandro');

//remove from the storage

localStorage.removeItem('name');

//Read the value 

const name = localStorage.getItem('name');

console.log(name);

//clear the storage 

localStorage.clear();

localStorage.setItem('name1', "Alessandro");
localStorage.setItem('name2','Walter White');

*/

const localStorageContent = localStorage.getItem('name');

let names;
if(localStorageContent === null) {
  names = [];
} else {
  names = JSON.parse( localStorageContent );
}
// console.log(names);
// const myArray = [1,2,3];

//console.log(JSON.parse( localStorageContent ));

names.push('Alessandro');
names.push('Isabella');
names.push('Drielly');

//console.log(JSON.stringify(names));
localStorage.setItem('names', JSON.stringify( names ));
//console.log(localStorageContent);