//            012345678910
const nome = 'Luiz Otávio';
console.log(nome[10]);
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo'; // Altera
alunos[3] = 'Luiza'; // Altera

alunos.push('Oliveira'); // Adiciona ao final da lista.
alunos.push('Lima'); // Adiciona ao final da lista.

alunos.unshift('Astrogildo'); // Adiciona no início da lista (array). 
alunos.unshift('Farinha'); // Adiciona no início da lista (array).


//alunos.pop(); // Remove a última lista do array. 
const removido = alunos.pop();
console.log("Aluno que foi removido ==>",removido);
console.log(alunos);

const removidoInicio = alunos.shift(); // Remove do início da lista. 

console.log("Removido do início ==>",removidoInicio);

console.log(alunos.length);

delete alunos[1]; // Deletando um aluno específico de uma lista.
console.log("Deletando um aluno expecífico de uma lista",alunos);


console.log(alunos[50]); // Como não existe vai dar 'undefined'. 

console.log("É um array?", alunos instanceof Array); // é um array?

console.log(alunos); // exibe tudo
console.log(alunos[0]); // primeiro elemento.
console.log(alunos[1]); // segundo elemento.
console.log(alunos[2]); // terceiro elemento.

console.log("Alunos que vão ser exibidos na minha lista específica", alunos.slice(0, 3)); //Itens que vão ser exibidos em minha lista.
console.log("Alunos que vão ser exibidos na minha lista específica", alunos.slice(0, -2)); //Itens que vão ser exibidos em minha lista.