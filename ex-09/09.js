//9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.

//capturando os elementos do HTML
function gerandoNumero() {
    let minimo = parseInt(document.getElementById('num1').value);
    let maximo = parseInt(document.getElementById('num2').value);
    

    if (isNaN(minimo) || isNaN(maximo)){
        document.getElementById('resultado').textContent = 'informe um numero valido'
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo; 
    document.getElementById('resultado').textContent = 'numero aleatorio: ' + numeroAleatorio; 
    
    
}