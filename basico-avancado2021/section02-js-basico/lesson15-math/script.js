let numero = Number(prompt("Digite um número: "));
//numero = Number(numero);

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p><strong>Raiz quadrada é: </strong> ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p><strong>${numero} é inteiro: </strong>${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p><strong>É NaN: </strong>${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p><strong>Arredondando para baixo:</strong> ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p><strong>Arredondado para cima: </strong>${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p><strong>Com duas casas decimais: </strong>${numero.toFixed(2)}.</p>`;

