/*
    Estrutura de Repetição - LOOP
        - FOR
            1) INICIALIZAÇÃO - Criar uma variável e colocar o valor inicial
            2) CONDIÇÃO - Enquanto for true, o laço continuará interando. Ele irá verificar antes de cada interação
            3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o laço nosso laço der uma volta

            for ([inicialização]; [condição]; [expressão final]) {
                // código a ser executado
            }
*/


const users = ['Maria', 'João', 'Pedro'];

for (let i = 0; i < users.length /* tamanho do array */; i++ /* i + 1 */) {
    console.log(users[i]);
}