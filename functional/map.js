// A função Map vai operar em cima de um array e o array resultante terá o mesmo tamanho que o array original.
// [array].map(função())

// Caso 1:
const numbers = [1, 2, 3, 4, 5, 6]

const numbersRes1 = numbers.map(function(el){
    return el * 2
}) // function expression

const numbersRes2 = numbers.map(el => el * 2) // arrow function ((el) =>{ return el * 2 })

console.log (numbersRes1, numbersRes2)




// Caso 2:
const studants = [
    {nome: "Jake", score: 6.4},
    {nome: "Susan", score: 8.6},
    {nome: "Emma", score: 9.4},
    {nome: "Peter", score: 9.1}
]

const notas = studants.map((el) =>{ return el.score}) 
console.log (notas) // retorna as notas através de uma arrow function

const getScore = el => el.score
console.log(
    studants
    .map (getScore)
    .map (Math.ceil)
) // primeiro Map pegas as notas e segundo Map arredonda o valor para cima



console.log("x=======Exercícios=======X")
// Exercício 1:
const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))


// Exercício 2:
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))


// Exercício 3: 
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}    
]

const nomesCarrinho = (obj) => obj.nome
console.log(carrinho.map(nomesCarrinho))

const somatoria = (obj) => obj.qtde * obj.preco
console.log(carrinho.map(somatoria))



console.log("Exercício fazendo meu próprio map")
// Exercício 4: (construindo um map)
Array.prototype.meuMap = function(fn){
    const novoArray = []     
    for(let i = 0; i < this.length; i++){
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

const carrinho2 = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}    
]

const nomesCarrinho2 = (obj) => obj.nome
console.log(carrinho2.meuMap(nomesCarrinho2))

const somatoria2 = (obj) => obj.qtde * obj.preco
console.log(carrinho2.meuMap(somatoria2))