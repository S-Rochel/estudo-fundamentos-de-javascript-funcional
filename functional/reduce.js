// Reduce Function (Array.reduce(função, valor inicial))

// Caso 1: 
const nums = [1, 2, 3, 4, 5, 6]
const total = nums.reduce(function fn(t, el){ return t + el})
console.log (` O total será: ${total}`) // Function Expression


// Caso 2: 
const numbers1 = [1, 2, 3, 4, 5, 6]
const soma = numbers1.reduce((t, el) => t + el)
console.log (soma) // Arrow Function


// Caso 3:
const numbers2 = [1, 2, 3, 4, 5, 6]
const sum = (total, el) => total + el
const total2 = numbers2.reduce(sum, 1000)
console.log (` Total  da soma passando o 1000 como parâmetro inicial: ${total2}`) // chamando a referência da função e passando um parâmetro inicial

// Caso 4:
const numbers3 = [1, 2, 3, 4, 5, 6]
const avg = (acumulador, el, indice, array) => {
    if (indice === array.length -1){
        return (acumulador + el) / array.length
    } else { 
        return acumulador + el
    }
}
const totalMedia = numbers3.reduce(avg)
console.log (totalMedia)



console.log("x=======Exercício=======x")
// Exercício 1: (somar o geral de todos os itens do estoque)
const carrinho1 = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lápis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]
const valorTotalItem = item => item.qtde * item.preco
const somarGeral = (acc, el) => acc + el

const totalGeral = carrinho1
    .map(valorTotalItem)
    .reduce(somarGeral, 0)

console.log(`A soma total de todos os itens do carrinho é: ${totalGeral}`)



console.log("x=======Exercício Desafio========x")
// Exercício 2: (desafio Map, Reduce, Filter)
const carrinho2 = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]
// 1º processamento: somente os itens que tem frágil = true:
// 2º processamento: qtde * preco -> total:
// 3º processamento: média totais:
const media = carrinho2
    .filter(item => item.fragil == true)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el)=> {
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        console.log(acc, el)
        return{
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal/novaQtde
        }
    },{qtde: 0, total: 0, media: 0})

console.log(media)    


console.log("x========Fazendo meu própio Reduce=========x")
// Construindo uma função Reduce do zero em uma versão simples
Array.prototype.meuReduce = function(fn, inicial){ 
    let acc = inicial // último valor
    for (let i = 0; i < this.length; i++){
        if(!acc && i === 0){ // se o valor de acc não estiver definido e i = 0 ele atribuirá o valor de i para o acc
            acc = this[i]        
        }else{
            acc = fn(acc, this[i], i, this) // está função altera o acc
        }
    }
    return acc // no final do for é retornado o acc
}

const numsTeste = [1, 2, 3, 4, 5, 6]
const totalReduce = numsTeste.meuReduce(function fn(t, el){ return t + el})
console.log (` O total será: ${totalReduce}`) // Function Expression