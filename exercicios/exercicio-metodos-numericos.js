// Método Númerico:

// .toString - transforma um valor númerico em string, informando o parâmetro radix ele retorna o valor em uma base específica.
{
    let x = 10;
    let y = 10;
    let z = (x + y) / 2
    console.log("Resultado final: " + z.toString(16))
    console.log(typeof z.toString())
}


// .toExponencial() - retorna uma string, com um número arredondado e escrito usando notação exponencial.
{
    let x = 9.656
    console.log(x.toExponential(1))
}


// .toFixed() - retorna uma string com um númro fixo de casas decimais, informar no parâmetro o número de casas decimais.
{
    let x = 9.567
    console.log(x.toFixed(1))
}


// .toPrecision - retorna uma string com o valor de precisão decimal arredondado para o valor mais próximo, dependendo do número de casas decimais.
{
    let x = 9.465
    console.log(x.toPrecision(1))
}


// .valueOf() - Retorna o valor primitivo do objeto especificado.
{
    let x = 9.156
    console.log(x.valueOf())
}


// Number() - transforma uma variável em número.
{
    let x = '1'
    let y = Number(x)
    console.log(typeof y)
    console.log(Number(new Date())) // retorna o valor em milisegundos
}


// parseInt() - analisa uma string e retorna um número inteiro. Se tiveer espaços apenas o primeiro número é retornado.
{
    let x = '12 10'
    let y = parseInt(x)
    console.log(typeof y + y)
}


// parseFloat() - analisa uma string e retorna um número com ponto flutuante. Espaços são permitidos. Apenas o primeiro número é retornado.
{
    let x = '11.10 kmr'
    let y = parseFloat(x)
    console.log(typeof y + y)
}


// MAX_VALUE - retorna o maior número possível em JavaScript.
{
    let x = Number.MAX_VALUE
    console.log(x)
}


// MIN_VALUE - retorna o menor número possível em JavaScript.
{
    let x = Number.MIN_VALUE
    console.log(x)
}


// POSITIVE_INFINITY  ou NEGATIVE_INFINITY - é retornado no estouro:
{
    let x = Number.POSITIVE_INFINITY
    console.log(x)
    let y = 1 / 0
    console.log(y)
}


// 