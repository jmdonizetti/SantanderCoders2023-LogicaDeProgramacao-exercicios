//7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

function calendario() {
    const data = new Date();
    const dia = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundos = data.getSeconds();


    //Utilizando ternario que vai adicionar o zero a esquerda para numeros menores que Dez... EX: ${dia < 10 ? "0" + dia : dia} de vez de sair 5 vai sair 05
    console.log(`hoje é dia ${dia < 10 ? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${ano}, são ${hora < 10 ? "0" + hora : hora}:${minuto < 10 ? "0" + minuto : minuto}:${segundos < 10 ? "0" + segundos : segundos}`);

}

calendario();

