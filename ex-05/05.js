//5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

//METODO-1
//Criando as Arrays
// const array1 = [1,2,3,4,5];
// const array2 = ['joao', 'apollo', 'elisa'];
 
// //Juntando as arrays utilizando uma função 
// function concatenandoArrays() {
//     const arraysConcatenadas = [...array1, ...array2];
//     console.log(arraysConcatenadas);
// }

// concatenandoArrays();

//METODO-2 
//criando uma função para concatenar as arrays
function concatenandoArrays(array1, array2) {
    //utilizando o return + o .concat para retornar os arrays concatenados
    return array1.concat(array2);
}

//Criando os Arrays
const lista1 = ['joao', 'apollo', 'elisa'];
const lista2 = [1,2,3,4,5];
//Criando uma const para mostrar o resultado da concatenação 
const resultadoConcatenacao = concatenandoArrays(lista1, lista2);

//mostrando o resultado no console. 
console.log(resultadoConcatenacao);