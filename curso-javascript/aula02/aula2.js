/* Variáveis em JavaScript

    const (Não pode ser reatribuída)
    let (Pode ser reatribuída)
    var (NÃO é recomendado USAR)

*/

const nome = 'King';
let idade = 25;


/* Tipos de Dados em JavaScript

    String -> Texto
    Number -> Números
    Boolean -> true ou false
    Array -> Vetores ou Listas
    Object -> Objetos
    Null -> Nulo
    Undefined -> Indefinido


*/

const texto = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`; // String
const numero = 10; // Number
const booleano = true; // Boolean
const lista = ['Maçã', 'Banana', 'Laranja']; // Array
const pessoa = {
    nome: 'King',
    idade: 27,
    conjuge: null, // Null
    profissao: undefined // Undefined
}; // Object

console.log(pessoa.nome); // Acessando o nome do objeto pessoa
console.log(lista[1]); // Acessando o segundo item da lista