// Não podemos criar constantes com palavras reservadas. 
// Constante precisam ter nomes significativos 
// Não pode começar o nome de uma constante com um número. Ex. 1nome.
// Não pode conter espaços ou traços. Ex. nome Cliente;
// Utilizamos camelCase.
// Case-sensitive.
// Não pode modificar o valor de uma constante.
// Não utiliza var, utilize CONST. 

const nome = 'João';
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log(nome);
console.log(resultado);
console.log(resultadoDuplicado);
console.log(typeof primeiroNumero);