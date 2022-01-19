// Operadores Bitwise JavaScript:


// & (AND), Define cada bit como 1 se ambos os bits forem 1.
// ex: 
// Operação 	Resultado	   igual à	      Resultado
//  5 & 1	        1	     0101 & 0001	     0001
{ 
    let x = 5 & 1
    console.log(x)
}


// | (OR), Define cada bit como 1 se um dos dois bits for 1
//  ex:
//  Operação	Resultado	   igual à	      Resultado
//   5 | 1	        5	     0101 | 0001	     0101
{
    let x = 5 | 1
    console.log(x)
}


// ^ (XOR), Define cada bit como 1 se apenas um dos dois bits 
// for 1.
// ex: 
// Operação 	Resultado	   igual à	      Result
//  5 ^ 1	        4	     0101 ^ 0001	   0100
{
    let x = 5 ^ 1
    console.log(x)
}


// ~ (NOT), Inverte todos os bits.
// ex: 
// Operação 	Resultado	 igual à	      Resultado
//   ~ 5	        10	      ~0101	             1010
{
    let x = ~5 
    console.log(x)
}


// >> (Deslocamento à direita), Desloca para a direita empurrando cópias do bit mais à esquerda da esquerda e deixa os bits mais à direita caírem.
// ex: 
// Operação 	Resultado	  igual à	      Resultado
//  5 >> 1	        2	     0101 >> 1	         0010
{
    let x = 5 >> 1 
    console.log(x)
}


// >>> (Deslocamento à direita de preenchimento zero), Desloca para a direita empurrando zeros da esquerda e deixando os bits mais à direita caírem.
// ex:
// Operação 	Resultado	  igual à	      Resultado   
// 5 >>> 1	        2	     0101 >>> 1	        0010
{
    let x = 5 >>> 1 
    console.log(x)
}


// << (Deslocamento à esquerda), Desloca para a esquerda empurrando zeros da direita e deixando os bits mais à esquerda cair.
// ex: 
// Operação 	Resultado	  igual à	      Resultado
//  5 << 1	        10	     0101 << 1	         1010
{
    let x = 5 << 1 
    console.log(x)
}



// Converter Número Decimal para Binário:
{
    let x = function decBin (decimal){
        return (decimal >>> 0).toString(2)
    }
    console.log(x(8))
}

// Converter Número Binário para Decímal:
{
    let x = function binDec (binario){
        return parseInt(binario, 2).toString(10)
    }
    console.log(x(1000))
}