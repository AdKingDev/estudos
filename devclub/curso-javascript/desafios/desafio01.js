/*
    DESAFIO 01 - Aula 03

    Utilizando if / else, crie um código que
        - verifica se uma cidade é grande ou pequena
        - cidade grande possui mais de 300mil habitantes

*/

const cidades = [
    { cidade: 'São Paulo', habitantes: 12300000 },
    { cidade: 'Poços de Caldas', habitantes: 166944 },
    { cidade: 'Salvador', habitantes: 2886698 },
    { cidade: 'Itabuna', habitantes: 214123 },
    { cidade: 'Belo Horizonte', habitantes: 2521564 },
    { cidade: 'Palmas', habitantes: 306296 }
]

if (cidades[0].habitantes > 300000) {
    console.log(`${cidades[0].cidade} é uma cidade grande.`)
} else {
    console.log(`${cidades[0].cidade} é uma cidade pequena.`)
}

if (cidades[1].habitantes > 300000) {
    console.log(`${cidades[1].cidade} é uma cidade grande.`)
} else {
    console.log(`${cidades[1].cidade} é uma cidade pequena.`)
}

if (cidades[2].habitantes > 300000) {
    console.log(`${cidades[2].cidade} é uma cidade grande.`)
} else {
    console.log(`${cidades[2].cidade} é uma cidade pequena.`)
}

if (cidades[3].habitantes > 300000) {
    console.log(`${cidades[3].cidade} é uma cidade grande.`)
} else {
    console.log(`${cidades[3].cidade} é uma cidade pequena.`)
}

if (cidades[4].habitantes > 300000) {
    console.log(`${cidades[4].cidade} é uma cidade grande.`)
} else {
    console.log(`${cidades[4].cidade} é uma cidade pequena.`)
}

if (cidades[5].habitantes > 300000) {
    console.log(`${cidades[5].cidade} é uma cidade grande.`)
} else {
    console.log(`${cidades[5].cidade} é uma cidade pequena.`)
}