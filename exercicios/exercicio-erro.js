// Erros de JavaScript.
/*
try - Esta instrução define um bloco de código para ser executado (para tentar).

catch - Esta instrução define um bloco de código para lidar com qualquer erro que ocorra no bloco try.

finally - Esta instrução define um bloco de código para ser executado independentemente do resultado.

throw - Esta instrução define um erro personalizado.
*/

// detectando um erro e executando o códiigo catch para tratá-lo:
{
    try {
        console.loo("Esta é uma mensagem de teste")
    }
    catch (err) {
        console.log(err.message)
    }
}


// throw - Se você usar throw junto com trye catch, poderá controlar o fluxo do programa e gerar mensagens de erro personalizadas.
{
    let x = 1
    try {
        if (x === 10){
            console.log('x = 10')
        } else if (x > 10){
            console.log(' x > 10')
        } else {
            throw "A variável x é menor que 10"
        }
    }
    catch (err) {
        console.log (err)
    }
}


// finally - Esta instrução permite executar o código, depois de tentar e pegar, independentemente do resultado.
{
    let x = 10
    try {
        if (x === 10){
            console.log('x = 10')
        } else if (x > 10){
            console.log(' x > 10')
        } else {
            throw "A variável x é menor que 10"
        }
    }
    catch (err) {
        console.log (err)
    }
    finally {
        console.log("Fim do programa")
    }
}


// RangeError - Este é um objeto de erro javascript que é lançado se você usar um número que está fora do intervalo de valores legais.
{
    let num = 1
    try {
        num.toPrecision(500)
    }
    catch (err) {
        console.log(err.name)
    }
}


// ReferenceError - Este é um objeto de erro javascript que é  lançado se você usar (referência) uma variável que não foi declarada.
{
    let x = 1
    try {
        x = y + 1
    }
    catch (err) {
        console.log(err.name)
    }
}


// SyntaxError - Este é um objeto de erro javascript que é lançado se você tentar avaliar o código com um erro de sintaxe.
{
    try {
        eval("Menssagem de teste")
    }
    catch (err) {
        console.log(err.name)
    }
}


// TypeError - Este é um objeto de erro javascript que é lançado se você usar um valor que está fora do intervalo de tipos esperados.
{
    let num  = 1
    try {
        num.toUpperCase()
    }
    catch (err) {
        console.log(err.name)
    }
}


// URIError - Este é um objeto de erro javascript que é lançado se você usar caracteres ilegais em uma função URI.
{
    try {
        decodeURI ("%%%")
    }
    catch (err) {
        console.log(err.name)
    }
}

