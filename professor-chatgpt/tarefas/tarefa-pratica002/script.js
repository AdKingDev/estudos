// Crie um script JS que peça ao usuário (via prompt) para digitar um número.
// Verifique se esse número é par ou ímpar.
// Mostre o resultado em um alert.

let num = prompt("Digite um número: ")

let numero = Number(num)
if (numero % 2 === 0) {
    alert(`O número ${numero} é PAR.`)
} else {
    alert(`O número ${numero} é ÍMPAR.`)
}