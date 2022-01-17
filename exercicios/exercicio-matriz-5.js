// forEach() - Este método chama uma função (uma função de retorno de chamada) uma vez para cada elemento da matriz.
{
    const num = [10, 39, 32, 12, 56]
    let res = ''
    num.forEach(fn)
    function fn(value, index, array){
                res += `O valor ${value} está na posição ${index}, \n`
            }
    console.log(res)
}


// map() - Este método cria um novo array executando uma função em cada elemento do array e resulta um novo array do mesmo tamanho do original.
{
    const num = [10, 39, 32, 12, 56]
    let res = num.map(fn)
    function fn(value, index, array){
        return  `${value} * 2 = ${value * 2}`
    }
    console.log(res)
}


// filter() - Este método cria uma nova matriz com elementos de matriz que passam em um teste.
{
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = num.filter(fn)
    function fn(value, index, array){
        let res = ''
        if(value > 5){
            res = value
        }
        return res
    }
    console.log(res)
}


// .reduce() - Este método executa uma função em cada elemento da matriz para produzir (reduzi-lo a) um único valor. Funciona da esquerda para a direita da matriz. Não reduz a matriz original.
{
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = num.reduce(fn, 1000) // posso ou não colocar um valor inicial
    function fn(total, value, index, array){
        return total + value
    }
    console.log(res)
} // o parâmetro total funciona como um acumulador



// .reduceRight() - Este método executa uma função em cada elemento da matriz para produzir (reduzi-lo a) um único valor. Trabalha da direita para a esquerda na matriz. Não reduz a matriz original.
{
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = num.reduceRight(fn, 1000)
    function fn(total, value, index, array){
        return total + value
    }
    console.log(res)
}


// .every() - Este método verifica se TODOS os valores do array passam em um teste. Retorna verdadeiro ou falso
{
    const numbers = [45, 4, 9, 16, 25];
    let allOver18 = numbers.every(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    console.log(allOver18)
}


// .some() - Este método verifica se TODOS os valores do array passam em um teste. Retorna verdadeiro ou falso.
{
    const numbers = [45, 4, 9, 16, 25];
    let someOver18 = numbers.some(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    console.log(someOver18)
}


// .indexOf() - Este método procura um valor de elemento em uma matriz e retorna sua posição. Retorna -1 se não encontrar o elemento.
{
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = nums.indexOf(5) 
    console.log(`O indíce do elemento procurado é ${res}`)
}


// .lastIndexOf() - Este método é igual a .indexOf(), mas retorna a posição da última ocorrência do elemento especificado.
{
    const nums = [1, 2, 3, 4,  4, 4, 5, 6, 7, 8, 9]
    let res = nums.lastIndexOf(4)
    console.log(`A última ocorrência desse elemento foi no indíce ${res}`)
}


// .find() - Este método retorna o valor do primeiro elemento da matriz que passa em uma função de teste.
{
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = nums.find(fn)
    function fn(value, index, array){
        return value > 7
    }
    console.log(res)
}


// .findIndex() - Este método retorna o índice do primeiro elemento da matriz que passa em uma função de teste.
{
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let res = nums.findIndex(fn)
    function fn(value, index, array){
        return value > 7
    }
    console.log(res)
}


// .from() - Este método cria um array de um objeto que tenha um tamanho ou que possa ser interavvél.
{
    const teste = Array.from("Paralelepipedo")
    console.log(teste)
}


// Array.keys() - Este método retorna um objeto Array Iterator com as chaves de um array.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();
    let text = ''
    for (let x of keys) {
        text += `Chave: ${x} \n`
    }
    console.log(text)
}


// .includes() - Este método verifica se um elemento está presente em um array. Retorna verdadeiro ou falso.
{
    const letras = ['a', 'b', 'c', 'd']
    let res = letras.includes('b')
    console.log(res)
}


// 