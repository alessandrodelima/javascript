// Lesson01 - var, let & const
/*
var learning = 'JavaScript';
console.log(learning);
var days99 = 99;
//var 99days = 100; error
console.log(days99);

var learning = 'JavaScript';
var learning = "JavaScript";
//var learning = 'JavaScript"; error
console.log(learning);

//Variables with 2 or more words 
var firstName =  'Alessandro Lima'; // camelcase
var first_name = 'Alessandro Lima' // underscore
var FirstName =  'Alessandro Lima' // Pascal case
console.log(firstName);

var learning = 'Javascript';
var age = 20;
var job = true;

console.log(learning);
console.log(age);
console.log(job);

var learning = 'Javascript',
name = 'Alessandro';

console.log(learning);
console.log(name);
*/

// ================================== Let & const ==================================

/*
let learning = 'Modern JavaScript';
//et learning = 'JavaScript';
console.log(learning);

let product1 = 'Book',
    product2 = 'Shirt';

    console.log(product1);
    console.log(product2);

let shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
console.log(shoppingCart);
console.table(shoppingCart);
*/

// ================================== Const Variables ==================================
/*
const name = 'Alessandro';

// you cannot re assing the value
name = 'Alessandro'
console.log(name);
*/

// ================================== Types in JavaScript ==================================
/*
let variable = 'Alessandro';
    variable = 20;
    variable = false;
    variable = undefined;
    variable = Symbol('my new Symbol');

    variable = 1;
    variable = 10.2030;
    variable = -300;
    variable = 20;
    variable = '20';    

    //console.log(variable);
    //console.log(typeof variable);

    //booleans 
    variable = false;

    // null 
    let bankSavings = null;
    console.log(bankSavings);

    //undefined 
    let person; 
    
    console.log(person);
    console.log(typeof person);

    // Symbols
    let symbolES6 = Symbol('my new Symbol');
    console.log(typeof Symbol);
    //Arrays
    let languages = ['HTML', 'JS', 'PHP'];
    console.log(typeof languages);

    //Objects

    let person2 = {
      name: 'Alessandro',
      country: 'Brasil'
    }
    
    console.log(typeof person2);

    let today = new Date();
    console.log("O tipo é: "+ typeof today);
*/

// ================================== Strings in JavaScript ==================================

/*
    let name;
    //quotes
    name = 'Alessandro Lima';
    name = 'Alessandro Lima';

    let message = "'Then i said: hey!! that's nice'";
    
    console.log(name);
    console.log(message);

    let learning = 'Modern' + ' ' + 'Javascript';

    console.log(learning);


  const learning = 'Learning JavaScript is Great"';
  const email = 'email.@gmail.com';
  let output; 
  //length
  output = learning.length;

  //concat
  output = learning.concat(" ", "and fun");

  // uppercase
  output = learning.toUpperCase();
  //lowercase
  output = learning.toLowerCase();

  // Indexof 
  output = learning.indexOf('JavaScript');

  // Check if @ existe on the form 
  output = email.indexOf('@');

  if(output > 0) {
    console.log('Valid Email');
  }else {
    console.log('Invalid email');
  }

  //substring
  output = learning.substring(0, 10);
  output = learning.substring(4, 10);

  //substring from de end
  output = learning.substring(learning.length - 6);

  //Slice 
  output = learning.slice(0,10);
  output = learning.slice(-6);

  //Split 
  output = learning.split(' ');
  console.log(output);

  // Example 

  const hobbies = 'read, walk, listen to music, write, lear to program';
  output = hobbies.split(',');
  console.table(output);

  //Replace 
  output = learning.replace('JavaScript', 'Modern JavaScript');

  // Include
  output = learning.includes('JavaScript');
  output = learning.includes('PHP');
  
  //repeat 
  let greet = "Hello ";
  output = greet.repeat(5);

  console.log(output);

    */

// ================================== Numbers in JavaScript ==================================
/*
const number1 = 30,
      number2 = 20,
      number3 = -3;

let result;

//Addition 
result = number1 + number2;

//Subtration 
result = number1 - number2;

//Multiplication 
result = number1 * number2;

//Addition 
result = number1 / number2;

//Modulo 
result = number1 % number2;

// PI

result = Math.PI;

//Round
result = Math.round(2.4);

//Round up or down
result = Math.ceil(2.2);
result = Math.floor(2.9);

//Square Root
result = Math.sqrt(144);

// Abs number
result = Math.abs(number3);

//Power 
result = Math.pow(8, 3);

// Get the minimum number from a list
result = Math.min(10,8,3,4,1,4,6,3,7, -3);

// Get the maximum number from a list
result = Math.max(10,8,3,4,1,4,6,3,7, -3);

console.log(result);


const cartItems = (20+30+30+40);
const discount = (cartItems / 100) * 20;
const totalPay = cartItems - discount;

// Print the results
console.log('Total: ' + cartItems);
console.log('Discount: ' + discount);
console.log('Pay: $' + totalPay);

let score = 5;
score++;
score--;

console.log(score);
*/

// ================================== Comparison Operators in JavaScript ==================================
/*
console.log(1 > 2);
console.log(1 < 2);

//comparing characteres 

console.log('a' > 'b');
console.log('a' < 'b');
console.log('a' < 'z');
console.log('Z' > 'a');

// Equality Operator 
console.log(2 == '2');

// Strict comparison operator ( this will check also the typeof)
console.log(2 === '2');

// Not Equals 

console.log(2 != 3);
console.log('hello' != ' hello');

//Compare Null & Undefined

console.log(null == undefined);
console.log(null === undefined);
*/
// ================================== Convert String into JavaScript ==================================
/*
const number1 = '50',
      number2 = 10,
      number3 = 'Nine';
      console.log(number1 + number2);

// Convert number1 into number
console.log( Number(number1) + number2 );
console.log( parseInt(number1) + number2 );

console.log(number3);
console.log(Number(number3));

console.log( number1 - number2 );



let number;

number = Number('20');
number = Number('20.20102');
number = Number(true);
number = Number(false);
number = Number(null);
number = Number([1,2,3]);


// Parse Int & Parse float

number = parseInt('100');
number = parseInt('100.20');
number = parseFloat('100.20');

//To Fixed
let number1 = '918389183',
    number2 = 918389183.981398139;


console.log(Number(number1).toFixed());
console.log(Number(number2).toFixed(6));


console.log(typeof number);



// Number to String

let number = 90210,
    output;
    output = String(true);

    //date to string 
    output = new Date();
    output = String(output);

    // array into a string
    output = String([1,2,3,4]);

    //output = String( number );

    //console.log(output.length);

    // to String 
   // output = 20.toString();
   output = true;
   output = [1,2,3].toString();
   output = {name: 'Alessandro'}.toString();
  

    console.log(output);
    console.log(typeof output);


// Template Literals or Template Strings

const product1 = 'Pizza',
      price1 = 30,
      product2 = 'Hamburger',
      price2 = 40;

      // Old Method
      let html;

      html = '<ul>' +
                '<li> Item:  ' + product1  + '</li>' +
                '<li> Price: ' + price1     + '</li>' +
                '<li>Item:   ' + product2  + '</li>' +
                '<li>Item:   ' + price2    + '</li>' +
                '<li>Total: '+ ( price1 + price2 ) + '</li>' +
              '</ul>';
    
              
              // New method ( Template Strings or Template literals)
              
              html = ` 
                <ul>
                  <li>Item:  ${product1} </li>
                  <li>Price: ${price1} </li>
                  <li>Item:  ${product2} </li>
                  <li>Price: ${price2} </li>
                  <li>Total:$ ${total (price1, price2) } </li>
                </ul>
              `;

      function total(price1, price2) {
        return price1 + price2;
      }
      
      let app = document.querySelector('#app');
      app.innerHTML = html;
*/

// ================================== Creating an array in JavaScript ==================================
/*
const numbers = [10, 20, 30, 40, 50 ];

console.log(numbers);


// Array of months


const months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

console.log(months);

//Mixes values
const mixedArray = ['Hello', 10, true, 'Yes', null];

console.log(mixedArray);

//Check the lenght of the array
console.log(months.length);

//check if this is an array
console.log(Array.isArray(months));

let name = 'Alessandro';
console.log(Array.isArray(name));


// Change values of the array
months[1] = 'New Month';
console.log(months);
 

// Find something in the array
console.log(months.indexOf('Jan'));

months.push('Jul');
// Add more items into the array (att the beginning)
months.unshift('Month 0');

//Add an element in the middle
months.splice(3, null, 'a New Month');
console.log(months);

// Remove element from the end 
months.pop();
//Remove element  from the beginning 
months.shift();

// Remove from the middle of the array
months.splice(3,  1);
console.log(months);

months.reverse();

//Concatenate 2 arrays
const array1 = [1,2,3],
      array2 = [9,8,7];

console.log(array1.concat(array2));

// Order an array (sort)
let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange', 'WaterMelon'];

console.log(fruits.sort().reverse());


const arrayNumbers = [3,1,100,4,7,7,3,1,25,14,67];
arrayNumbers.sort();


//Order from lower to the great number
arrayNumbers.sort(function(number1, number2) {
  return number1 - number2;
  
})

//Order from greater to lower number
arrayNumbers.sort(function(number1, number2) {
  return number2 - number1;
  
})


console.log(arrayNumbers);



// ================================== Creating an array in JavaScript ==================================

const person = {
  firstName: 'Alessandro',
  lastName: 'De la torre',
  job: 'Web Developer',
  email: 'email@mail.com',
  age: 31,
  favoriteMusic: ['Trance', 'Rock', 'Grunge'],
  living: {
    city: 'Guadalajara',
    country: 'Mexico'
  },
  getAge: function() {
    return 31;
  },
  bornYear: function() {
    return new Date().getFullYear() - this.age;
  },
  getJob: function() {
    return this.job;
  }

};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.favoriteMusic);
console.log(person.living);
console.log(person.getAge() );
console.log(person.bornYear());
console.log(person.getJob());

//Array of Object 

let cars = [
  {model: 'Mustang', engine: 6.0},
  {model: 'Camaro', engine: 6.1},
  {model: 'Challenger', engine: 6.1}
]

for(let i = 0; i < cars.length; i++) {
  //console.log(cars[i]);
  console.log(cars[i].model);
}



// const in Array & Objects

const newArray = [1,2,3];
newArray[0] = "New Element in the array";
newArray.push('Something new');

console.log(newArray);

const car = {
  name: 'Mustang',
  engine: 6.4
}

car.name = 'Challenger';
console.log(car);



// ================================== Functions JavaScript ==================================

// Function declaration 
function helloVisitor() {
  console.log('Hello & Welcome to our website');
}
helloVisitor();

// a function must be called 
function helloVisitor(name) {
  console.log(`Hello ${name} & Welcome to our website`);
}
helloVisitor('Alessandro');

// a function must be called 
function helloVisitor(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName} & Welcome to our website`);
}
helloVisitor('Alessandro', 'De la torre');

function helloVisitor(firstName='Visitor', lastName='De la torre') {
  console.log(`Hello ${firstName} ${lastName} & Welcome to our website`);
}
helloVisitor('Alessandro');

function addition(number1, number2) {
  return number1 + number2;
}

let result;

result = addition(1,2);
result = addition(10,50);
result = addition(3,4);
console.log(result);


// function expressions

const sum = function(number1 = 0, number2= 0) {
  return number1 + number2;
}

console.log(sum(3,3));
console.log(sum(4,8));
console.log(sum(14,18));
console.log(sum(24,28));
console.log(sum());



//Functions that are invoked inmediately (IIFEs)
//Inmediately-invoked function expression 

(function() {
  console.log('Yes!! this is an IIFE');
})();


(function(technology) {
  console.log('Learning '+ technology);
})('JavaScript');



// Property methods
const musicPlayer = {
  play: function(id) {
    console.log(`Playing song with the ID: ${id}`);
  },
  pause: function () {
    console.log('Pause...');
  }
}

musicPlayer.play(30);
musicPlayer.pause();

//Methods can be outside 

musicPlayer.remove = function(id) {
  console.log(`Removed from the playList, ID: ${id}`);
}

musicPlayer.remove(20);

console.log('Javascript');
alert();
prompt();
confirm();


// ================================== Date JavaScript ==================================

const today = new Date();
//const birthday = new Date('january 5 1987');
let output;

let birthday = new Date('January 5 1987');
birthday = new Date('1-5-1987');
output = birthday;

output = today.getMonth();
output = today.getDate();
output = today.getDay();
output = today.getFullYear();
output = today.getMinutes();
output = today.getHours();
output = today.getFullYear();
         today.setFullYear(2000);
output = today.getFullYear();
         today.setMonth(10);
output = today.getMonth();


console.log(today);

// ================================== Operator JavaScript ==================================
//const score = 100;

//Equal 
if(score == 100) {
  console.log('Yes!! is the same');
} else {
  console.log('No, is not the same');

}



//not Equal 
if(score != 100) {
  console.log('Yes, different!!');
} else {
  console.log('No, not different');

}



if(score === '100') {
  console.log('Yes, they\'re the same');
} else {
  console.log('No, they\'re different');
}

let score;
console.log(typeof score);

if(typeof score != 'undefined') {
  console.log(`Yes, and the score is ${score}`);
} else {
  console.log('No score...');
}

let cash = 500;
let cartTotal = 300;

if (cash > cartTotal) {
  console.log('Sucessful Payment...');
} else {
  console.log('Insufficent Funds');
}

let currentTime = 10;

if(currentTime <= 10) {
  console.log('Good Morning!');
} else if (currentTime <=18) {
  console.log('Good Afternoon');
} else if(currentTime <= 24) {
  console.log('Good Night');
} else {
  console.log('INVALID!!');
}


// melhorando o código

let currentTime = 20;

if(currentTime > 0 && currentTime <= 12) {
  console.log('Good Morning!');
} else if (currentTime > 12  && currentTime <=18) {
  console.log('Good Afternoon');
} else if(currentTime > 18  && currentTime <= 24) {
  console.log('Good Night');
} else {
  console.log('INVALID!!');
}

// OR Operator 
let cash = 1000,
    credit = 300,
    cartTotals = 800,
    available = cash + credit;

if(cartTotals < cash || cartTotals < credit) {
  console.log('You can pay with cash or credit');
} else if(available >= cartTotals) {
  console.log('Pay with both');
} else {
  console.log('Insufficiente Funds');
}


// Ternary Operator
const loggedIn = true;

console.log( loggedIn === true ? 'The user is logged in!' : 'Not logged In, please Log In');

// ================================== Switch JavaScript ==================================
 
const paymentMethod = 'card';

switch(paymentMethod) {
  case 'cash': 
    console.log(`You Payment method is: ${paymentMethod}`);
    break;
  case 'check': 
    console.log(`You Payment method is: ${paymentMethod} we will verify the funds...`);
    break;
  case 'card': 
    console.log(`You Payment method is: ${paymentMethod} processing...`);
    break;
  default: 
    console.log('Please select a valid payment method');
    break;
}



// Assing a variable from the switch case. 
const cars = ['Camaro', 'Mustang', 'Challenger'];

const selected = 10;
let car; 

switch(selected) {
    case 0:
      car = cars[0];
      break;
    case 1: 
      car = cars[1];
      break;
      case 2: 
      car = cars[2];
      break;
    default: 
      console.log("Invalid!");
}

console.log(`You selected car is ${car}`);


// ================================== For Loops JavaScript ==================================
for (let i = 0; i < 10; i++) {
  console.log(`Number: ${i}`);
}


for (let i = 0; i < 10; i++) {
  if(i == 2) {
    console.log(`Yes!! 2 !!`);
    continue;
  }
    console.log(`Number: ${i}`);
}



for (let i = 0; i < 10; i++) {
  if(i == 2) {
    console.log(`Yes!! 2 !!`);
    break;
  }
    console.log(`Number: ${i}`);
} 

for (let i = 0; i < 10; i++) {
  if(i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// For loop for a shopping cart

const shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4',
'Product 5', 'Product 6', 'Product 7', 'Product 8'];
console.log(shoppingCart.length);

for (let i = 0; i < shoppingCart.length; i++) {
  
  console.log(`Product: ${shoppingCart[i]}`);
  
}

// ================================== For Loops JavaScript ==================================

// While loops

let i = 0;
while (i < 10) {
    console.log(`Number: ${i}`);
    i++;
    
}

const shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4',
'Product 5', 'Product 6', 'Product 7', 'Product 8'];

let i = 0;

while (i < shoppingCart.length) {
  console.log(`Product: ${shoppingCart[i]}`);
  i++;
}

let i = 0;

do {
  console.log(`Number: ${i}`);
  i++;
} while(i < 10);


// For loop

const todo = ['Homework', 'Food', 'Project', 'Learn JS'];

for (let i = 0; i < todo.length; i++) {
  console.log(todo[i]);
  
}

todo.forEach(function(assigment, index) {
  console.log(`${index} : ${assigment}`);
})

// Map
const shoppingCart = [
  {id: 1, product: 'Book'},
  {id: 2, product: 'Shirt'},
  {id: 3, product: 'Album'},
  {id: 4, product: 'Pen'}
];

const productName = shoppingCart.map(function(productName) {
  return productName.product;
});

console.log(productName);

// Iterator in ES6

let myCar = {
  model: 'Camaro',
  engine: 6.0,
  year: 1969,
  make: 'Chevy'
}

for(let key in myCar) {
  console.log(`${key}: ${myCar[key]}`);
}

// try, catch and Finally

try {
  something();
}catch(error) {
  console.log(error);
} finally {
  console.log('Execute always no matter what!');
}

function getClients() {
  console.log('Downloading...');

  setTimeout(function() {
    console.log('Complete...');
  }, 3000);
}

getClients();

// Retrieve width and height of the window

let height, width;

height = window.outerHeight;
width =  window.outerWidth;

if(width > 1000) {
  document.body.style.background= 'red';

}else if(width > 500) {
  document.body.style.background = 'blue';
} else {
  document.body.style.background = 'green';
}

console.log(height);
console.log(width);


// Location 
let urlLocation = window.location;

console.log(urlLocation.host);
console.log(urlLocation.hostname);
console.log(urlLocation.host);
console.log(urlLocation.port);
console.log(urlLocation.search);

// redirect via js
//window.location.href = 'http://google.com.br';

console.log(urlLocation);
*/
// Scope

var a = 'a';
let b = 'b';
const c = 'c';

// Function Scope
function function_scope() {
  var a = 'A';
  let b = 'B';
  const c = 'C';
  let something = "Something";
  console.log('FUNCTION SCOPE: ' + a, b, c); //a, b, c
}
function_scope();

//console.log(something); // error

//Block Scope (if statements or for)
if(true) {
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';
  console.log('BLOCK SCOPE: '+ a, b, c);
}

//FOR LOOP
for (let a = 0; a < 10; a++) {
  console.log(a);
}


console.log('GLOBAL: ' + a, b, c); //a, b, c