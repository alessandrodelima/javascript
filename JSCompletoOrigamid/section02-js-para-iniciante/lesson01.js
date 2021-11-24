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

/*
    Os nomes podem iniciar com $, _, ou letras. 
    podem contar números mas não iniciar com eles. 

    Case sensitive
    nome é diferente de Nome

    Não utilizar palavras reservadas
    https://www.w3schools.com/js/js_reserved.asp

    Camel case 
    É comum nomearmos assim: abrirModal
    */