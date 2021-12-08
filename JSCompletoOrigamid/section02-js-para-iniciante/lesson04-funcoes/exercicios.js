// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado){
  return !!dado;
}
console.log(isTruthy(23));

// Crie uma função matemática que retorne o perímetro de um quadrado. L'embrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {

  return lado * 4;
}
console.log(perimetroQuadrado(3));

// Crie uma função que retorne o seu nome completo. Ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  //return nome + ' ' + sobrenome;
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Alessandro", "Lima"));

// Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
    return true;
  }else {
    return false;
  }
}
console.log(isEven(10));
console.log(isEven(10003));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado(45));
console.log(tipoDeDado('Teste'));
console.log(tipoDeDado(undefined));

/*
  addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o 
  segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer.
*/
addEventListener('click', function(){
  console.log('Alessandro Lima');
});

//Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
