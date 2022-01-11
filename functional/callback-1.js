// Função Callback: (Callback é quando passo uma função como parâmetro para outra função e depois está função será chamada de volta)
function exec(fn, b, c){
    return fn(b, c)
}

function somarNoTerminal (b, c){
    return console.log(`O resultado da soma é: ${b + c}`)
}
function subtrairNoTerminal( b, c){
    return console.log(`O resultado da subtração é: ${b - c}`)
}

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)