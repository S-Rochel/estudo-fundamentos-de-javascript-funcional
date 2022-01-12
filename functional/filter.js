// A função Filter filtra os elementos e o array resultante pode ter tamanho igual ou diferente do array original, para isso será passado uma função para a função filter.
// Array.filter(fn())

// Caso 1: 
const numbers = [1, 2, 3, 4, 5, 6]
const greaterThanFour = el => el >= 4 // função retorna o elemento quando o elemento for maior que zero

console.log (numbers.filter(el => el >= 4)) // aqui passo uma função para a função filter
console.log (numbers.filter(greaterThanFour)) // aqui passo para a função filter a referência de uma função





// Caso 2: 
const studants = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const greatStudants = studants => studants.score >= 9
console.log (studants.filter(greatStudants))



console.log("x=======Exercícios=======x")
// Exercício 1:
const carrinho = [
    {nome:'Caneta', qtde: 10, preco: 7.99},
    {nome:'Impressora', qtde: 0, preco: 649.50},
    {nome:'Caderno', qtde: 4, preco: 27.10},
    {nome:'Lápis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde: 1, preco: 19.20}
]

const qtdeMaiorQueZero = item => item.qtde > 0
const itensValidos = carrinho.filter(qtdeMaiorQueZero)
console.log(itensValidos)


// Exercício 2:
const itemNome = item => item.nome
const itensMaior2 = item => item.qtde > 2

const resultado = carrinho
    .filter(itensMaior2)
    .map(itemNome)

console.log(resultado)    


// Exercício 3: (construindo uma função filter)
Array.prototype.meuFilter = function(fn){
    const novoArray = []
    for (let i = 0; i < this.length; i++){
        if (fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}
const carrinho2 = [
    {nome:'Caneta', qtde: 10, preco: 7.99},
    {nome:'Impressora', qtde: 0, preco: 649.50},
    {nome:'Caderno', qtde: 4, preco: 27.10},
    {nome:'Lápis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde: 1, preco: 19.20}
]
const itemNome2 = item => item.nome
const itensMaior = item => item.qtde > 2

const resultado2 = carrinho2
    .meuFilter(itensMaior)
    .map(itemNome2)

console.log(`O resultado de meuFilter é: ${resultado2}`)   
 