// Passando Parâmetros para dentro de uma função

// Caso 1:
function logParams (a, b, c){
    console.log (a, b, c)
}
logParams (1, 2, 3) // passa os valores para a função
logParams (1, 2, 3, 4, 5) // como a função só recebe três parâmetros os demais são ignorados
logParams (1, 2) // quando é passado menos parâmetros que o esperado, os parâmetros que faltarem recebe o valor undefined


// Caso 2:
function defaultParams (a = 1, b = 2, c = 3){
    console.log (a, b, c)
}
defaultParams (4, 5, 6) // a função recebe os valores passados
defaultParams (4) // quando é passado menos valores que o esperado, os valores que faltam recebe o valor padrão.


// Caso 3:
function logNums (nums) {
    for (let n of nums) {
        console.log (n)
    }
}
logNums ([1, 2, 3]) // passando os valores através de arrays


// Caso 4:
function logNums2 (...nums){
    console.log (Array.isArray(nums)) // verifica que 'nums' ainda está recebendo um array
    for (let n of nums) {
        console.log (n)
    }
}
logNums2 (1, 2, 3, 4) // como a função espera receber valores através de 'spread / rest' caracterizado pelos três pontinhos, estes valores poderão ter a quantidade variada
