/*

    Functions / Funções
    - Trecho de código que é executado
        SOMENTE quando é chamado
    - Trecho de código que pode ser reutilizado

*/


// Void
function dizerNome() {
    console.log('King');
}

dizerNome(); // Chamada da função

// Parâmetros
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('Kolt');
saudacao('Mundo');

// Return
function SaqueBancario(valor, saldo) {
    if (valor > saldo) {
        return 'Saldo insuficiente';
    } else {
        return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${saldo - valor}`;
    }
}

const exemplo = SaqueBancario(600, 1600);
console.log(exemplo);

// Arrow Function
const SayMyName = () => {
    console.log('King Kolt');
}

SayMyName();