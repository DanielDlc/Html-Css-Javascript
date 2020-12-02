/*
Entre 0 _ 11 Bom dia
Entre 12 _ 17 Boa tarde
Entre 18 _ 23 Boa noite
 */

const hora = 12;

// se essa condição for avaliada como verdadeira 
if (hora >= 0 && hora <= 11) {  // inicia o bloco com a condição do if
    console.log("Bom dia!");  // irá retornar Bom dia.
} else if (hora >= 12 && hora <= 17) {  // condição senão 
    console.log("Boa Tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite");
} else {
    console.log("Olá digite um valor entre 00 e 23 horas.");
}