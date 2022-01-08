// Anonymous function, função que não recebe um nome
(function (a, b, c){
    return a + b + c
})

// Function expression, quando atribui o resultado de uma função em uma variável.
const sum = function (a, b){
    return a + b
}

const result = sum(3, 4)
console.log(result)