/*
forEach
Constantemente vamos selecionar uma lista de itens do dom. 
A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
*/
/*
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
    console.log(item);
});

let i = 0;
imgs.forEach(function(){
    console.log(i++);
});


let i = 0;
imgs.forEach(function(item, index, array){ // Testar cada item do parâmetro
    console.log(item, index, array);
});


forEach e Array

forEach é um método de Array, alguns objetos array-like possuem este método. 
Caso não possua, o ideal é transformá-los em uma array.


const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});
*/

/*
Sintaxe curta em relação a function expression. 
Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.



const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});
*/

