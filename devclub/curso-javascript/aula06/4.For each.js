/*

    ForEach(item, index, array)

    item) - O elemento atual do array
    index) - O índice do elemento atual
    array) - O array completo

*/

const users = [
    { name: 'King', age: 27 },
    { name: 'Queen', age: 16 },
    { name: 'Jack', age: 17 },
    { name: 'Joker', age: 20 }
]

users.forEach(function(item, index) {
    if(item.age < 18) {
        console.log(`O usuário ${item.name}, posição ${index+1}, é menor de idade.`);
    }
});