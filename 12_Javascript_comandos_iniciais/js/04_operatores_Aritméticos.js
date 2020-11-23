/*
Operadores Aritméticos
ordem de precedência: (), **, * / %, + -   quando os operadores tem a mesma precedência,
a ordem sempre é da esquerda para a direita.
+ Adição e concatenação
- subtração 
/ divisão
* multiplicação
** potenciação
% resto da divisão
*/

// tipagem fraca
const num_01 = 10;  // número inteiro
const num_02 = '20';  // string
console.log(num_01 * num_02)

console.log('');

const num_03 = 2;
const num_04 = parseInt('5');  // parseInt converte para um número inteiro
console.log(num_03 ** num_04);
console.log(typeof num_04);  // typeof para saber o tipo convertido de num_04

console.log('');

const num_05 = 10;
const num_06 = parseFloat('3.5')  // parseFloat converte para número real
console.log(num_05 - num_06);
console.log(typeof num_06);

console.log('');

const num_07 = 15;
const num_08 = Number('25');  // Number converte para número inteiro ou real
const num_09 = Number('35.5');
console.log(num_07 + num_08 + num_09);
console.log(typeof num_08);
console.log(typeof num_09);