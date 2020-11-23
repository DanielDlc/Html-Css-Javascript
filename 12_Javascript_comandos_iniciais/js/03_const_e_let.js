/*
Daniel Louro Costa tem 30 anos, pesa 90 kg
tem 1.8 de altura e seu imc é 
*/

const nome = "Daniel";
const sobrenome = " Louro Costa";
const idade = 37;
const peso = 87;
const altura = 1.8;

let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2020 - idade;

console.log(nome + '' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log("tem", altura, "m e seu IMC é de", imc);
console.log(nome + '' + sobrenome, 'nasceu em', anoNascimento,'.');
console.log('');

/* podemos fazer também com template strings */
console.log(`${nome} tem ${altura} de altura e seu IMC é de ${imc}`);