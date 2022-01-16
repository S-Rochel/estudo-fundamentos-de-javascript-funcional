// Array é uma variável especiial que serve para quardar vários valores.

// criar um array:
const listaCor = ['azul', 'Verde']
const listaNomes = new Array('João', 'Pedro')

const array1 = [10] // cria um array com um elemento
const array2 = new Array(10) // cria um array com dez elementos indefinidos


// acessar itens de um array:
let item = listaCor[0]
console.log(item)
console.log(listaCor[0])
console.log(listaNomes[listaNomes.length -1])

// adicionar ou alterar itens em um array:
listaCor[0] = 'Preto'
listaCor.push('Branco')
listaCor[listaCor.length] = 'Roxo'

console.log(listaCor)


// .length - retorna a quantidade de elementos em um array:
console.log(listaCor.length)


// laço for em um array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

for (let i in fruits){
    console.log(fruits[i])
}


// Array.forEach() - está é uma função para percorrer um array, chama uma função callback para cada elemennto de uma array:
const frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.forEach(fn)
function fn(valor){
    console.log(`Valor recebido: ${valor}`)
}


// Array.isArray() - Para saber se uma variável é um array ou objeto
console.log(typeof frutas) // retorna que o array frutas é um objeto, porque todo o array em javascript é um objeto
console.log(Array.isArray(frutas)) // retorna verdadeiro dizendo que o array frutas é verdadeiramente um array


console.log(listaCor instanceof Array) // retorna verdadeiro se um objeto for criado com um construtor
console.log(listaNomes instanceof Array)  // retorna verdadeiro se um objeto for criado com um construtor


