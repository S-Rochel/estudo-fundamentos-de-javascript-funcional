// First-Class Function é um conceito que significa que uma linguagem permite armazenar uma função dentro de uma variável.

// Caso 1:
const add = function (a, b){
    return a + b
} // function express
console.log (add(10, 20))

// Caso 2: 
const multiply = (x, y) => x * y // arrow function
console.log (multiply(5, 5))