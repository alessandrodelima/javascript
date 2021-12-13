console.log("Hello!");
/*
Variáveis 
Responsáveis por guardar dados na memória. 
Inicia com a palavra var, let ou const 
Ex: 
var nome = 'Alessandro';
let idade = 28;
const possuiFaculdade = true;
*/
var nome = 'Alessandro';
var idade = 28; 
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5; 
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'Lima', 
    cidade = 'Brasilia';

console.log(sobrenome, cidade);

var semDefinir; 
console.log(semDefinir);

//console.log(aindaNaoDefine);
// Hoinsting --> São movidas para cima do código, porém o valor atribuído não é movido. 

var comida;
console.log(comida);
var comida = 'Pizza'
console.log(comida);

var time = 'Vasco';
time = 'Flamengo';
console.log(time);

// EXERCÍCIOS 

// Declarar uma variável com o seu nome
let nomeExercicio = 'Hermenegildo';

//Declarar uma variável com a sua idade. 
let idadeExercicio = '25'; 

//Declarar uma variável com a sua comida favorita e não atribuir valor
let comidaFavorita; 

//Atribuir valor a sua comida favorita 
comidaFavorita = 'Lasanha';

// Declrar 5 variáveis diferentes sem valores. 
 
let professor, endereco, rua, municipio, cep;



console.log('Nome:' + nomeExercicio);
console.log('Idade: '+idadeExercicio);
console.log('Comida favorita: '+comidaFavorita);

