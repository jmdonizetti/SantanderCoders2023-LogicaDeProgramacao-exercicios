//4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

//Criando uma função para ignorar as letras maiusculas e minusculas 
function compareStringsIgnoreCase(str1, str2) {
    //transformando as duas strings em letra minuscula 
    return str1.toLowerCase() === str2.toLowerCase();
}

//função para comparar as strings e mostrar na tela o resultado
function compareStrings() {
    //capturando os elementos do HTML
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;
    let resultElement = document.getElementById('result');

    //criando condição para mostrar se as strings são iguais 
    if (compareStringsIgnoreCase(string1, string2)){
        resultElement.textContent = 'As strings são "IGUAIS" ignorando maiúsculas e minúsculas.'
    }else {
        resultElement.textContent = 'As strings são "DIFERENTES".'
    }
}

//capturando o button e adicionando o evento de click, para quando o usuario clicar em verificar mostrar o resultado na tela.
document.getElementById('verificar').addEventListener('click', compareStrings)