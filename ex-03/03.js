
//Criando a função para verificar se a frase tem a palavra JavaScript
function verificaPalavra() {
    const palavraAlvo = "JavaScript";

    //capturando os elementos do HTML
    const entradaUsuario = document.getElementById("entrada").value;
    const resultado = document.getElementById("resultado");
 
    //Adicionando a condição para mostrar o resultado 
    if(entradaUsuario.includes(palavraAlvo)) {
        resultado.textContent = 'Texto digitado contem a palavra "JavaScript".';
    }else{
        resultado.textContent = 'Texto digitado não contem a palavra "JavaScript".';
    }
    
};
//Maneira simplificada de adicionar o click no button
document.getElementById("verificar").addEventListener("click", verificaPalavra);

// Outra maneira de adicionar o evento no button
// const verificarInput = document.getElementById("verificar");

// adicionando o click no button
// verificarInput.addEventListener("click", verificaPalavra);



