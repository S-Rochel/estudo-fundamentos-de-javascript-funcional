// Higher-Order Function é um conceito que significa que uma linguagem permite que uma função opere usando outras funções, ou seja, posso passar uma função como argumento para outra função ou retornar uma função apartir de outra função.

// Caso 1 (função como parâmetro para outra função):
function run(fn){
    fn()
} // quando passa a referência de uma função como parâmetro para a função ela executa essa referência como sendo uma função

function sayHello (){
    console.log ('Hello')
}

run(sayHello) // passar somente a referência da função, se passar invocando a funação ela retornará undefined, pois a função sayHello() não retorna nada.


// Caso 2 (função anônima como parâmetro para outra função):
run (function(){
    console.log ('run!!!')
}) // neste caso a função run() foi invocada passando para ela uma função anônima.

// Caso 3 (função como parâmetro para outra função e esperar um retorno que será armazenado em uma constante):
function retorno (fn){
    return fn()
}
const result = retorno (Math.random)
console.log (result)