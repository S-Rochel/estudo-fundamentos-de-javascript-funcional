// Métodos Matemáticos em JavaScript

// Math.round(x) - Este método retorna o inteiro mais próximo:
{
    let num = Math.round(4.4)
    console.log(num)
}


// Math.ceil(x) - Este método retorna o valor de x arredondado para o inteiro mais próximo, ou seja arredonda para mais:
{
    let num = Math.ceil(4.3)
    console.log(num)
}


// Math.floor(x) - Este método retorna o valor de x arredondado para o inteiro mais próximo, ou seja arredonda para menos:
{
    let num = Math.floor(4.9)
    console.log(num)
}


// Math.trunc(x) - retorna a parte inteira de x:
{
    let num = Math.trunc(4.9)
    console.log(num)
}


// Math.sign(x) - retorna se x for negativo, nulo ou positivo:
{
    let num = Math.sign(-3)
    console.log(num)
}


// Math.pow(x, y) - retorna o valor de x elevado a y:
{
    let num = Math.pow(3, 2)
    console.log(num)
}


// Math.sqrt(x) - retorna a raiz quadrada de x:
{
    let num = Math.sqrt(9)
    console.log(num)
}


// Math.abs(x) - retorna o valor absoluto (positivo) de x:
{
    let num = Math.abs(-9.78)
    console.log(num)
}


// Math.sin(x) - retorna o seno (um valor entre -1 e 1) do ângulo x (dado em radianos).
{
    let num = Math.sin(9.78)
    console.log(num)
} // retorna o valor em radianos

{
    let num = Math.sin(9.78 * Math.PI / 180)
    console.log(num)
} // retorna o valor em graus, usando a formula (ângulo em radianos = ângulo em graus x PI / 180)


// Math.cos(x) - retorna o cosseno (um valor entre -1 e 1) do ângulo x (dado em radianos).
{
    let num = Math.cos(9.78 * Math.PI / 180)
    console.log(num)
} // retorna o valor em graus, usando a formula (ângulo em radianos = ângulo em graus x PI / 180)


// Math.min()e Math.max()pode ser usado para encontrar o valor mais baixo ou mais alto em uma lista de argumentos:
{
    let num = Math.min(0, 150, 30, -8, -200)
    console.log(num)
} // retorna o valor mais baixo

{
    let num = Math.max(0, 150, 30, -8, -200)
    console.log(num)
} // retorna o valor mais alto



// Math.random() - retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo):
{
    let num = Math.random()
    console.log(num)
}


// Math.log(x) - retorna o logaritmo natural de x.
{
    let num = Math.log(2)
    console.log(num)
}


// Math.log2(x) - retorna o logaritmo de base 2 de x.
{
    let num = Math.log2(16)
    console.log(num)
} // Quantas vezes devemos multiplicar 2 para obter 8?


// Math.log10(x) - retorna o logaritmo de base 10 de x.
{
    let num = Math.log10(1000)
    console.log(num)
} // Quantas vezes devemos multiplicar 10 para obter 1000?


