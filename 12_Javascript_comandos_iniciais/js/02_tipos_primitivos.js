/*
Tipos primitivos String, number, undefined, null e boolean
*/

const nome = "Daniel"; // string com apóstrofo
const nome_01 = "Daniel"; // string com aspas
const nome_02 = `Daniel`; // string com crase
const num_01 = 10; // number inteiro
const num_02 = 10.52; // number tipo float

let nomeAluno; // undefined -> não aponta local nenhum na memória

const sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória
const aprovado = false; // Bollean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b);  // 2, 2

a = 3;
console.log(a, b); // 3, 2
