/*
    if & else -> Controlador de Fluxo

    if = se
    else = senão

    Operadores de Comparação
    > maior que
    < menor que
    >= maior ou igual a
    <= menor ou igual a
    == igual a (valor)
    === igual a (valor e tipo)
    != diferente de (valor)
    !== diferente de (valor e tipo)
*/

const nome = 'King';
const senha = 'Test1234';

if (nome === 'King' && senha === 'Test1234') {
    console.log('Acesso Permitido');
} else {
    console.log('Acesso Negado');
}