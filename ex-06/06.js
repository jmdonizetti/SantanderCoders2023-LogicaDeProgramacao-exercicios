// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

//Criando o Array
const lista = [3, 28, 25, 14, 4];
//Utilizando o .reduce() para somar a lista com acumulador + valor iniciando no valor 0
const soma = lista.reduce((acumulador, valor) => acumulador + valor, 0);
//Criando uma const que tire a média dos valores fazendo a soma dos valores dividido pela lista.length 
const media = soma / lista.length;


console.log(`Valores: ${lista}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);
