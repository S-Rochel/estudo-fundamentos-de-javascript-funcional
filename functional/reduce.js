// Reduce Function

// Caso 1: 
const nums = [1, 2, 3, 4, 5, 6]
const total = nums.reduce(function fn(t, el){ return t + el})
console.log (` O total será: ${total}`) // Function Expression


// Caso 2: 
const numbers1 = [1, 2, 3, 4, 5, 6]
const soma = numbers1.reduce((t, el) => t + el)
console.log (soma) // Arrow Function


// Caso 3:
const numbers2 = [1, 2, 3, 4, 5, 6]
const sum = (total, el) => total + el
const total2 = numbers2.reduce(sum, 1000)
console.log (` Total  da soma passando o 1000 como parâmetro inicial: ${total2}`) // chamando a referência da função e passando um parâmetro inicial

// Caso 4:
const numbers3 = [1, 2, 3, 4, 5, 6]
const avg = (acumulador, el, indice, array) => {
    if (indice === array.length -1){
        return (acumulador + el) / array.length
    } else { 
        return acumulador + el
    }
}
const totalMedia = numbers3.reduce(avg)
console.log (totalMedia)