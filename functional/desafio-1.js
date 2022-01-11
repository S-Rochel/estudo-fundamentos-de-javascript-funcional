// Desafio 1: (criar uma função que receba outra função e some tres números -> somar(3)(4)(5))

function somar(n1){
    return function(n2){
        return function(n3){
            return n1 + n2 + n3
        }
    }
}
console.log (somar(3)(4)(5))



// Desafio 2: (criar uma função que receba como parâmetros dois números e uma função e retorne como resultado uma soma e ou uma subtração).

function calcular(n1){
    return function(n2){
        return function(fn){
            return fn(n1, n2)
        }
    }
}
function soma(n1, n2){
    return n1 + n2
}
function subtrair(n1, n2){
    return n1 - n2
}

console.log(calcular(3)(4)(soma))
console.log(calcular(20)(10)(subtrair))
