// A função Map vai operar em cima de um array e o array resultante terá o mesmo tamanho que o array original.

// Caso 1:
const numbers = [1, 2, 3, 4, 5, 6]

const numbersRes1 = numbers.map(function(el){
    return el * 2
}) // function expression

const numbersRes2 = numbers.map(el => el * 2) // arrow function ((el) =>{ return el * 2 })

console.log (numbersRes1, numbersRes2)




// Caso 2:
const studants = [
    {nome: "Jake", score: 6.4},
    {nome: "Susan", score: 8.6},
    {nome: "Emma", score: 9.4},
    {nome: "Peter", score: 9.1}
]

const notas = studants.map((el) =>{ return el.score}) 
console.log (notas) // retorna as notas através de uma arrow function

const getScore = el => el.score
console.log(
    studants
    .map (getScore)
    .map (Math.ceil)
) // primeiro Map pegas as notas e segundo Map arredonda o valor para cima