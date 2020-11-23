/*
Declarando nome de uma variável utilizando let não var
Declarando nome de uma constante (podemos observar que const não podem ser modificadas)
Domes de variáveis são case-sensitive
Não podem começar por números ou espaços ou traços e palavras reservadas
*/

let nome; // let para declarar um variável
nome = "Daniel"; // Inicializando a variável
console.log("olá, meu nome é ", nome, "estou declarando uma variável com let");
nome = "Miguel"; // Inicializando variável com outro nome
console.log("Agora o nome da variável declarada é ", nome);

console.log("");

const numero = 100; // constante não muda o valor! preciso colocar o valor na criação.
console.log("este é o valor de uma const: ", numero);
nome = 150; // podemos observar que o número continua 100 pois não podemos modificar
console.log("o número continua com o valor:", numero);
