// Transformar uma function expression e function Arrow

const increment1 = function (n){
    return n + 1
} // function expression.

const increment2 = (n) => {
    return n + 1
} // a function arrow sempre será uma função anônima.

const increment3 = n => {
    return n + 1
} // quando a função arrow recebe um único parâmetro é possivel simplifica-la retirando os parênteses.

const increment4 = n => n + 1 // quando o comando está em uma só linha de código posso retirar as chaves e o retorno da função será implícita.

console.log(`increment1 = ${increment1(0)}`)
console.log(`increment2 = ${increment2(1)}`)
console.log(`increment3 = ${increment3(2)}`)
console.log(`increment4 = ${increment4(3)}`)
