//1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

//Capturando os elementos do HTML

const baseInput = document.getElementById('base');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

//Adicionar evento ao botão de calcular

calcularBtn.addEventListener('click', () =>{
    //convertendo entrada de valores para numeros
    const base = parseFloat(baseInput.value);
    const altura = parseFloat(alturaInput.value);

    //verificando se são valores validos
    if(isNaN(base) || isNaN(altura)){
        resultadoDiv.textContent = 'Por favor insira um valor válido';
        return;
    }

    //calcular área do retangulo
    const area = base * altura;

    //exibindo resultado
    resultadoDiv.textContent = `A área do retangulo é de ${area.toFixed(2)}²`;

});