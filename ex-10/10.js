//Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
function isPrime(number) {
    if (number <= 1){
    return false;
}
    if (number <= 3){
    return true;
}
    if (number % 2 === 0 || number % 3 === 0){
    return false;
}

    let i = 5;
    while (i * i <= number) {
        if(number % i === 0 || number % (i + 2) === 0){
            return false;
        }
        i += 6;
    }
        return true;
}


function checkPrime() {
    const numeroUser = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if(numeroUser === ""){
        resultado.textContent = 'Por favor insira um numero!';
        return;
    }

    const number = parseInt(numeroUser)

    if(isNaN(number)){
        resultado.textContent = 'Por favor insira um numero!'
        return;
    }

    if(isPrime(number)){
        resultado.textContent = `O numero ${number} é primo.`
    }else {
        resultado.textContent = `O numero ${number} não é primo.`
    }
}

