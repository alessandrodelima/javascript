let name = prompt("What's your name? ");
document.getElementById('welcome').innerHTML = 'Welcome: ' + name;

console.time("Test");
console.log("Hello World!");
console.table([1, 2, 3, 4]); // exibe o array dentro de uma tabela. Top!
console.error('OOps!! Something went Wrong'); // Exibe uma mensagem de erro (danger)
//console.clear(); // limpa o console.
console.warn('A Warning...'); // Exibe um alerta no console.
console.timeEnd("Test");

/*
let arrLista = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
console.log(arrLista);
console.table(arrLista);
*/