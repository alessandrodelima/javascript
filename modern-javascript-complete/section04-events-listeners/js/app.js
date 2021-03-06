// ======================Event Listeners
/*
const clearCartBtn = document.getElementById('clear-cart');

clearCartBtn.addEventListener('click', clearBtnFunction); 
  
function clearBtnFunction() {
    console.log('You clicked the button');
}



//Melhorando a função 

const clearCartBtn = document.getElementById('clear-cart');

clearCartBtn.addEventListener('click', clearBtnFunction); 
  
function clearBtnFunction(e) {
    
  //target 
  let element;
  element = e

  // read the target 
  element = e.target;
  element = e.target.id;
  element = e.target.className;
  element = e.target.innerText;
  element = e.target.innerText = 2 + 2;
  element = e.target;
 
  console.log(element);
}


//=========================================== Mouse Events

const heading = document.querySelector('#heading');
const links = document.querySelector('nav');
const clearCartBtn = document.querySelector('#clear-cart');

// Click Mouse Event 
//clearCartBtn.addEventListener('click', printEvent);

//Double click
//clearCartBtn.addEventListener('dblclick', printEvent);

//Mouse Enter
//clearCartBtn.addEventListener('mouseenter', printEvent);

// Mouse Leave
//clearCartBtn.addEventListener('mouseleave', printEvent);

// Mouse over 
//clearCartBtn.addEventListener('mouseover', printEvent);

// Mouse out 
//clearCartBtn.addEventListener('mouseout', printEvent);

// Mouse up 
//clearCartBtn.addEventListener('mouseup', printEvent);

// Mouse down 
//clearCartBtn.addEventListener('mousedown', printEvent);

// Mouse Move 
heading.addEventListener('mousemove', printEvent);


function printEvent(e) {
  console.log("O Evento é: "+e);
  console.log(`THE EVENT IS: ${e.type}`);
}


console.log(heading);
console.log(links);
console.log(clearCartBtn);


// =================================== Input & Form Events

// create the variables

const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course');
// console.log(searchForm);
// console.log(searchInput);

//Events for <form>
searchForm.addEventListener('submit', printEvent);

function printEvent(e) {
  e.preventDefault();

  //Print the value from the input 
  console.log(searchInput.value);
  console.log(`Type: ${e.type}`);
}

//=====================================================

const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course');

// Input Events
//searchInput.addEventListener('keydown', printEvent);
//searchInput.addEventListener('keyup', printEvent);
// searchInput.addEventListener('keypress', printEvent);
// searchInput.addEventListener('focus', printEvent);
//searchInput.addEventListener('blur', printEvent);
//searchInput.addEventListener('cut', printEvent);
//searchInput.addEventListener('copy', printEvent);
//searchInput.addEventListener('paste', printEvent);
searchInput.addEventListener('input', printEvent);

function printEvent(e) {
 
  // if(searchInput.value.length == 0) {
  //   alert('type Something! Please.');
  // }
  

  //Print the value from the input 
  console.log(searchInput.value);
  console.log(`Type: ${e.type}`);
}


// Event Bubbling

// Variables 

const card = document.querySelector('.card'),
      infoCards = document.querySelector('.info-card'),
      addCartBtn = document.querySelector('.add-to-cart');

      // console.log(card);
      // console.log(infoCards);
      // console.log(addCartBtn);

// Event Listeners 

card.addEventListener('click', function(e) {
  console.log('You clicked the card');
  e.stopPropagation();
})

infoCards.addEventListener('click', function(e) {
  console.log('You clicked the info');
  e.stopPropagation();
})

addCartBtn.addEventListener('click', function(e) {
  console.log('You clicked the add to cart btn');
  e.stopPropagation();
})
*/
// Delegation 

const shoppingCart = document.querySelector('#shopping-cart');
//document.body.addEventListener('click', removeProductFromCart);
shoppingCart.addEventListener('click', removeProductFromCart);


function removeProductFromCart (e) {
  //console.log(e);
  //console.log(e.target);
  
  if(e.target.classList.contains('remove')) {
    //console.log('Yes!!');
    e.target.parentElement.parentElement.remove(); 
  } else {
    console.log('No');
  }

}

// Add to cart 

const courseList = document.querySelector('#courses-list');

courseList.addEventListener('click', addToCart);

function addToCart (e) {
  if(e.target.classList.contains('add-to-cart')){
    console.log('Course added');
  }
}