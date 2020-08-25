console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`; 

// console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro); // não é muito viável trabalhar desta forma.

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

//Adicionando um ítem na lista
listaDeDestinos.push(`Brasília`);

listaDeDestinos.splice(1, 1); // splice - deleta elemento da lista

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);