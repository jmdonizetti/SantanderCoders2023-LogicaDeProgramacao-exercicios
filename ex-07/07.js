//7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

// function calendario() {
//     const data = new Date();
//     const dia = data.getDate();
//     const mes = data.getMonth() + 1;
//     const ano = data.getFullYear();
//     const hora = data.getHours();
//     const minuto = data.getMinutes();
//     const segundos = data.getSeconds();

//     //Utilizando ternario que vai adicionar o zero a esquerda para numeros menores que Dez... EX: ${dia < 10 ? "0" + dia : dia} de vez de sair 5 vai sair 05
//     console.log(`hoje é dia ${dia < 10 ? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${ano}, são ${hora < 10 ? "0" + hora : hora}:${minuto < 10 ? "0" + minuto : minuto}:${segundos < 10 ? "0" + segundos : segundos}`);

// }

// calendario();


function obterDataHoraFormatada() {

    const dataAtual = new Date();
    
    const dia = String(dataAtual.getDate()).padStart(2, "0");
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const ano = dataAtual.getFullYear();

    const hora = String(dataAtual.getHours()).padStart(2, "0");
    const minuto = String(dataAtual.getUTCMinutes()).padStart(2, "0");
    const segundo = String(dataAtual.getSeconds()).padStart(2, "0");

    const obterDataHoraFormatada = `${dia}/${mes}/${ano}:${hora}:${minuto}:${segundo}`
    return obterDataHoraFormatada;
}

console.log(obterDataHoraFormatada());



