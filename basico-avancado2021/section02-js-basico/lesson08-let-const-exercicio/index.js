/*
    Lucas Souza de Oliveira tem 30 anos, pesa 84Kg.
    tem 1.8 de altura e seu IMC é de 25.925925925925924.
    Lucas Souza nasceu em 1991
*/
const nome = 'Lucas Souza';
const sobrenome = 'Oliveira';
const idade = 30;
const peso = 84; 
const alturaEmM = 1.80;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2021 - idade; 


console.log(indiceMassaCorporal);
console.log(anoNascimento);

console.log(nome, sobrenome,'tem',idade, 'anos. Pesa', peso, 'Kg');
console.log('tem',alturaEmM, 'de altura e seu IMC é de',indiceMassaCorporal);
console.log(nome + ' nasceu em ' + anoNascimento + '.');

// template strings

console.log(`Tem ${alturaEmM}, de altura e seu IMC é de ${indiceMassaCorporal}`);
