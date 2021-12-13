/*
FUNÇÕES
Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
*/

function areaQuadrado() {
    console.log('Função ativa.');
}
areaQuadrado();

function areaQuadrado2(lado) {
    return lado * lado;
}
console.log(areaQuadrado2(10));
// ===================================

function pi() {
    return 3.14;
  }

var total = 5 * pi(); // 15.7
console.log(total);
// ===================================
/*
PARÂMETROS E ARGUMENTOS
Ao criar uma função, você pode definir parâmetros.
Ao executar uma função, você pode passar argumentos.
*/

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)); // 60 e 1.70 são os argumentos
// ===================================
/*
Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também
PARÊNTESES EXECUTA A FUNÇÃO
*/
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita('verde')); // retorna 'Você gosta de mato'
console.log(corFavorita()); // retorna 'Você não gosta de nada'

//Função anônima

addEventListener('click', function() {
    console.log('Clicou');
});

function mostraConsole() {
    console.log('oi');
}
addEventListener('click', mostraConsole);

//PODE OU NÃO RETORNAR UM VALOR
//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

//VALORES RETORNADOS
//Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));

//ESCOPO
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); // erro, totalPaises não definido
console.log(precisoVisitar(10)); // erro, totalPaises não definido

//ESCOPO LÉXICO
//Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

//HOISTING
//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
