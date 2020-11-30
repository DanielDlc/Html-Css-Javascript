/*
Operadores lógicos
&&    AND    e      // todas expressões precisam ser verdadeiras
||    OR     ou     
!     NOT    não  
*/

const expressaoAnd = true && true && true && true; 
console.log(expressaoAnd);  // todas precisam ser verdadeira (true)

const expressaoOr = true || false;
console.log(expressaoOr);  // apenas uma precisa ser verdadeira (true)

console.log(!false);  // negando (invertendo a expressão) 