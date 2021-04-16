let varA = 'A';
let varB = 'B';
let varC = 'C';

/*
const varATemp = varA; // A
varA = varB; // B
varB = varC;  // C
varC = varA; // B
varC = varATemp; //A

Outra maneira mais enxuta
*/
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);