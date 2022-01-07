// Declaração de uma função que não recebe nenhum parâmetro  e não retorna nada.
function sayHello(){
    console.log('Hello!')
}

sayHello()

// Declaração de uma função que recebe um parâmetro mas não retorna nada
function sayHelloTo (name){
    console.log('Hello ' + name) 
    // ou interpolando
    console.log(`Hello ${name}`)
}

sayHelloTo('Sandro') 

// Declaração de uma função que não recebe nenhum valor e retorna uma string
function returnHi(){
    return 'Hi!'
}

console.log(returnHi()) // recebe o parâmetro retornado da função 
const imprime = returnHi()
console.log(imprime)    // recebe o parâmetro retornado da função através de uma constante.

// Declaração de uma função que recebe um parâmetro e retorna um valor
function returnHiTo(name){
    return `Hi ${name}` // recebe o valor de 'name' e retorna fazendo uma interpolação com uma string
}

console.log(returnHiTo('Sandrão'))