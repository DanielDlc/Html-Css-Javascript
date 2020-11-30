/*
Operadores de comparação
> maior que
>= maior que ou igual a 
< menor que
<= menor que ou igual a 
== igualdade (valor ) não irei utilizar
=== igualdade estrita (valor do tipo)
!= diferente (valor) não irei utilizar
!== diferente estrito (valor e tipo)
*/

const comparacao = 10 > 5;  
console.log(comparacao);  // true (sim 10 é maior que 5)

const maior_ou_igual = 20 >= 10;
console.log(maior_ou_igual);  // true ( sim 20 é maior que 10)

const menor = 10 < 5;
console.log(menor);  // false (não pois 10 é maior que 5 )

const menor_ou_igual = 20 <= 10;
console.log(menor_ou_igual);  // false (não pois 20 é maior que 10)

// Correção de tipo 
const num_01 = 10;  // number
const num_02 = '10';  // string
const comparar = num_01 == num_02;
console.log(comparar);  // true, porém não é adequado comparar somente o valor e não o tipo!

// Correção de tipo 
const num_03 = 10;  // number
const num_04 = '10';  // string
const comparar_tipos = num_03 !== num_04;
console.log(comparar_tipos);  // true pois comparamos o tipo e valor.
