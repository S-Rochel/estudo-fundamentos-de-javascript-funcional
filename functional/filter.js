// A função Filter filtra os elementos e o array resultante pode ter tamanho igual ou diferente do array original, para isso será passado uma função para a função filter.

// Caso 1: 
const numbers = [1, 2, 3, 4, 5, 6]
const greaterThanFour = el => el >= 4 // função retorna o elemento quando o elemento for maior que zero

console.log (numbers.filter(el => el >= 4)) // aqui passo uma função para a função filter
console.log (numbers.filter(greaterThanFour)) // aqui passo para a função filter a referência de uma função





// Caso 2: 
const studants = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const greatStudants = studants => studants.score >= 9
console.log (studants.filter(greatStudants))