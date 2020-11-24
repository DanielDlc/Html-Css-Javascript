/* 
Tipos de strings
*/
// Strings são indexadas (interável)
// elementos     0123456789
let umaString = 'Um "texto"';  // texto com aspas

console.log(umaString);  // aspas duplas 
console.log(umaString[4]);  // pegando o índice 4
console.log(umaString.charAt(6));  // podemos utilizar charAt para pegar elemento 6
console.log(umaString.charCodeAt(6));  // referente o código da letr x na tabela ASC
console.log(umaString.concat('concatenado'))  // utilizado para concatenar	
console.log(umaString.indexOf('texto'));  // descobrir em qual índice começa texto
console.log(umaString.replace('Um', 'Novo'));  // substituir uma palavra por outra
console.log(umaString.length);  // descobrir o tamanho com a quantidade de caracteres
console.log(umaString.toUpperCase());  // mudar para tudo maiúsculo 
console.log(umaString.toLowerCase());  // mudar tudo para minúsculo 