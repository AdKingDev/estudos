/*
    Estrutura de Repetição - LOOP
        - for in
        - Usado para interar Objetos

*/

const users = {
    name: 'King',
    age: 27,
    color: 'purple'
}

for (let key in users) {
    console.log(users[key])
}