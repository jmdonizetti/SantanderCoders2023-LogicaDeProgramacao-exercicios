//8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

const lista1 = [1,2,3,4,5];
const lista2 = [6,7,8,9,10];
const lista3 = [11,12,13,14,15];
const lista4 = [16,17,18,19,20];

const maiorValorArray = Math.max(...lista1, ...lista2, ...lista3, ...lista4)

//Printando o mario valor entre todas as lista 
console.log(`Maior valor de todas as lista é: ${maiorValorArray}`);

//printando o maior valor da primeira lista
console.log(`Maior valor da primeira lista é: ${Math.max(...lista1)}`);

