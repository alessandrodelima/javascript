//Exercício

// Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: 'Alessandro',
    sobrenome: 'Lima',
    idade: 28,
    cidade: 'Quebec'
}   
console.log(dados);

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

//set o valor 
carro.preco = 3000; 

console.log(carro);

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,

    latir(pessoa){
        if(pessoa === 'Homem') {
            return 'Latir';
        }else{
            return 'Não late.';
        }
    } 
}

console.log(cachorro);
console.log(cachorro.latir());
console.log(cachorro.latir('Homem'));