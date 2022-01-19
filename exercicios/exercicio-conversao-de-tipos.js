// Conversão de tipos JavaScript

// Number() - Este método pode converter strings em números.
{
    let x = "10"
    console.log(Number(x))
}


// Number() ou .getTime() - Este método pode ser usado para converter datas em números.
{
    let d = new Date().getDate()
    console.log("Dia: ", Number(d))

    let x = new Date().getTime()
    console.log(x)
}

 
// operador unário '+' - pode ser usado para converter uma variável em um número:
{
    let y = "5";      // y é uma string
    let x = + y;      // x é um  number
    let z = "john"    // z é uma strimg
    let w = + z       // w é um number (NaN)
}


// String() - Este método pode converter números em strings.
{
    let a = 11
    console.log(`String de ${a}, retorna:`, typeof (String(a)))

    console.log(`String de 123, retorna:`, typeof (String(123)))

    console.log(`String de (100 + 23), retorna:`, typeof (String(100 + 23)))
}


// String() ou .toString() - Este método pode converter datas em strings.
{
    let d = new Date().getDate()
    console.log("Dia usando String(): ", String(d))

    let x = new Date().getDate()
    console.log("Dia usando .toString(): ", d.toString())
}




// String() ou .toString() - Este método pode converter booleanos em string
{
    console.log(String(true))
    console.log(true.toString())
}



// toString() - Este método pode converter números em strings.
{
    let a = 1
    console.log(`.toString de ${a}, retorna:`, typeof (a.toString()))

    console.log(`.toString de 13, retorna:`, typeof ((13).toString()))

    console.log(`.toString de (100 + 23), retorna:`, typeof ((100 + 23).toString()))
}


// .toExponential() - Este método retorna uma string, com um número arredondado e escrito usando notação exponencial.
{
    let x = 100
    console.log(x.toExponential())
}


// .toFixed() - Este método retorna uma string, com um número arredondado e escrito com um número especifico de decimais.
{
    let x = 100
    console.log(x.toFixed(2))
}


// .toPrecision() - Este método retorna uma string, com um número escrito com um comprimento especificado, da esquerda para a direita.
{
    let x = 100.17
    console.log(x.toPrecision(4))
}


// Retornando datas:
{
    console.log("'new Date().getDate()' retorna o dia do mês (1 - 31): ", new Date().getDate() )

    console.log("'new Date().getDay()' retorna o dia da semana (0 - 6): ", new Date().getDay() + 1 )

    console.log("'new Date().getMonth()' retorna o mês (0 - 11): ", new Date().getMonth() + 1 )

    console.log("'new Date().getFullYear()' retorna o ano (aaaa): ", new Date().getFullYear())

    console.log("'new Date().getHours()' retorna a hora (0 - 23): ", new Date().getHours())

    console.log("'new Date().getMinutes()' retorna os minutos (0 - 59): ", new Date().getMinutes())

    console.log("'new Date().getSeconds()' retorna os segundos (0 - 59): ", new Date().getSeconds())

    console.log("'new Date().getMilliseconds()' retorna os milisegundos (0 - 999): ", new Date().getMilliseconds())
}



