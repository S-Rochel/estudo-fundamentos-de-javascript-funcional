// for -Este loop tem a seguinte sintaxe: for (instrução 1; instrução 2; instrução 3){ Bloco de códigos a ser executado}
/*
A instrução 1 é executada (uma vez) antes da execução do bloco de código. Pode ser opcional.
A instrução 2 define a condição para executar o bloco de código. Precisa retornar verdadeiro ou falso.
A instrução 3 é executada (todas as vezes) após a execução do bloco de código. Pode ser opcional. 
*/
{
    for (let i = 0; i < 5; i++){
        console.log(`Está é a ${i + 1}º execução do laço, a variável i = ${i}`)
    }
}



// for in - percorre as propriedades de um objeto ou um array e retorna o valor da chave (sempre em string), no caso de array o valor da chave será o valor de indíce.
{
    const letra = ['A', 'B', 'C', 'D']
    
    for (let x in letra){        
        console.log(`Este é o ${Number(x) + 1}º laço, e x = ${letra[x]}`)
    }
}


// forEach() - método chama uma função (uma função de retorno de chamada - função callback - fn (recebe o valor do item, indíce, a matriz em si)) uma vez para cada elemento da matriz.
{
    const letra = ['A', 'B', 'C', 'D']
    letra.forEach(fn)
    function fn(value, index, array){
        console.log (`${index + 1}º laço, retorna o valor = ${value}`)
    }
}


// for of - Este método percorre os valores de um objeto iterável.Ele permite que você faça um loop sobre estruturas de dados iteráveis, como Arrays, Strings, Maps, NodeLists e muito mais:
/*
    for (variável of iterável){
        bloco de códigos
    }
    variável - Para cada iteração, o valor da próxima propriedade é atribuído à variável. A variável pode ser declarada com const, let ou var.
    iterável - Um objeto que tem propriedades iteráveis.
*/
{
    const letra = ['A', 'B', 'C', 'D']
    let i = 1
    for (let x of letra){
        console.log(`Este é o ${i}º laço e retorna o valor ${x}`)
        i+=1
    }
}