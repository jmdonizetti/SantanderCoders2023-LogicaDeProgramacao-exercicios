//2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

//capturando os elementos do HTML

const numeroInput = document.getElementById('numero');
const verificaBtn = document.getElementById('verifica');
const resultadoDiv = document.getElementById('resultado');

//Adicionando o evento de clicar ao botão verificar

verificaBtn.addEventListener('click', () =>{
    //convertendo a entrada de valores para numeros 
    const numero = parseFloat(numeroInput.value);

    //verificando se são valores invalidos
    if(isNaN(numero)) {
        resultadoDiv.textContent = 'Por favor insira um valor valido (NUMERO)';
        return;
    }

    //calculando se o numero é par 
    if(numero %2===0){
        resultadoDiv.textContent = `O numero ${numero} é par!`;
        
    }else{
        resultadoDiv.textContent = `O numero ${numero} é ímpar!`;
    }
});