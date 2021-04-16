//let umaString = "Um \"texto\"";
//let umaString = "Um texto";
let umaString = "O rato roeu a roupa do rei de roma";

//umaString = "Um \texto";

//console.log(umaString);
console.log(umaString[7]);
console.log(umaString.charAt(8));
console.log(umaString.concat('', 'em', '', ' um'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('texto'));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));

console.log(umaString.substring(umaString.length - 5));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());