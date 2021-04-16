/*
function saudacao(nome) {
    //console.log(`Bom dia ${nome}!`);
    return `Bom dia ${nome}!`;
}
const variavel = saudacao("Alessandro");
saudacao("Isabella");
console.log(variavel);

================================================

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log("O resultado da soma é:",soma(2, 2));
console.log("O resultado da soma é:",soma(3, 1));
console.log("O resultado da soma é:",soma(5, 10));

================================================

const raiz = function(n) { // Função anônima. 
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

===============================================

*/

const raiz = (n) => { // Arrow Function. 
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));