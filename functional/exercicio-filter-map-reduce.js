// Exercício juntando filter, map e reduce.

const students = [
    {name:'Jake', score: 6.4},
    {name:'Susan', score: 8.6},
    {name:'Emma', score: 9.4},
    {name:'Peter', score: 9.1}
]

const greatStudent = student => student.score >= 9 // Estudantes com notas maior que 9

const getCore = el => el.score // Nota dos estudantes

const avg = (acc, el, i, array) => {
    if (i === array.length -1) {
    return (acc + el) / array.length
    } else {
        return acc + el 
    }
}

console.log (`A média dos melhores estudantes e ${
    students
        .filter(greatStudent) // filtra os melhores estudantes
        .map(getCore)         // pega somente as notas destes estudantes
        .reduce(avg)          // faz a média das notas 
    }`)