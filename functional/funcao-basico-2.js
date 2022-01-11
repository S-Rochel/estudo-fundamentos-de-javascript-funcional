// Caso 1 (passar uma função como parâmetro para outra função):

//function teste1 (fn){
//    fn()
//}
//console.log (teste1(3)) // não posso passar um parâmetro qualquer pois fn() só pode ser executada como função se receber como parâmetro uma função

function teste2 (fn) {
    if (typeof fn === 'function'){
        fn()
    }
    console.log ('Aqui não será executado o fn() pois primeiro vai ser comparado se o tipo de dado é uma função')
}
console.log (teste2(3))



console.log("=x=x=x=x=x=x=x=x")
// Caso 2 (Retornar uma função a partir de uma outra função)
function potencia (base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
const potenciaDe2 = potencia(2) // 1º chama a funcão potencia passando como parâmetro a base
console.log(potenciaDe2(8))     // 2º a função potencia retornna uma outra função anônima para a qual passo como parâmetro o expoente, e esta função anônima fará o calculo.


console.log (potencia(2)(5))    // outra maneira e chamar a função passando o parâmetro dela e em seguida já passo o parâmetro para a função anônima.