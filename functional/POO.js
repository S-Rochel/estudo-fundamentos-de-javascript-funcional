// Usando uma função para instânciar um objeto
//Exemplo 1:
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
} // para tornar os atributos disponível e necessário inícia-los usando this. para colocar esses atributos dentro da instância gerada, e this. torna os atributos públicos 

const p1 = new Produto('abacate', 2.00) // new cria uma instância de Produto
const p2 = new Produto('laranja', 1.99)

console.log(p1.nome, p1.preco)



// Exemplo 2:
function ProdutosFeira(nome, preco, desc = 0.1){
    this.nome = nome
    this.preco = preco
    this.desc = desc
    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}

const prod1 = new ProdutosFeira('Banana', 4.00)
const prod2 = new ProdutosFeira('Uva', 8.00)

console.log(`A ${prod1.nome} com desconto saí por R$ ${prod1.precoFinal()}`)

console.log(`A ${prod2.nome} com desconto saí por R$ ${prod2.precoFinal()}`)



// Usando Classe para intânciar um objeto
class Produtos2 {
    constructor(nome, preco, desc){
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }
    get precoComDesconto(){
        return this.preco * (1 - this.desc)
    } // com o get posso acessar esta função como se fosse um atributo
}

const prod3 = new Produtos2('Limão', 5.00, 0.50)
console.log(`O preço do ${prod3.nome} é ${prod3.precoComDesconto}`) // 'precoComDesconto' através do get acesso a função como se fosse um atributo



// Usando um Prototype:
function NovoProduto(nome, preco, desc = 0.5){
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.valorFinal = function(){
        return this.preco * (1 - this.desc)
    }
} // esta é uma função construtora 

NovoProduto.prototype.log = function(){
    console.log(`Nome: ${this.nome} Preço: ${this.preco}`)
} // através do prototype.log consigo adicionar uma funcionalidade na função NovoProduto que não existia anteriormente dentro da função construtora

const produto1 = new NovoProduto('Tomate', 7.0)
produto1.log()
