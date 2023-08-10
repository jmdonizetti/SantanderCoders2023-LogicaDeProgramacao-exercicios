function compareStringsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

function compareStrings() {
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;
    let resultElement = document.getElementById('result');

    if (compareStringsIgnoreCase(string1, string2)){
        resultElement.textContent = 'As strings são "IGUAIS" ignorando maiúsculas e minúsculas.'
    }else {
        resultElement.textContent = 'As strings são "DIFERENTES".'
    }
}

document.getElementById('verificar').addEventListener('click', compareStrings)