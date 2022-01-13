// Promisse definição: é algo que será resolvido no futuro
// criando uma Promisse let promessa = new Promisse(função), passa uma função como parâmetro para a promisse para retornar um dado no futuro, e a Promisse retorna apenas um único valor.

let promessa = new Promise(function(cumprirPromessa){ 
    cumprirPromessa(3) // posso gerar um único valor, uma lista ou um objeto
})
    
console.log(promessa) // dessa maneira será retornado um objeto, já que o operador new cria um objeto

promessa.then(function(valorDevolvido){
    console.log(valorDevolvido)
}) // then é um método que chama a Promisse e precisa receber uma função como parâmetro.

promessa.then(console.log) // como console.log é um método somente ele já basta como parâmetro para o método then.

promessa 
    .then(valorDevolvido=> valorDevolvido * 2)              // primeira chamada do then faz 3 * 2
    .then(valorDevolvido=> valorDevolvido * 4)              // segunda chamada do then faz resultado da primeira chamada * 4
    .then(valorDevolvido=> console.log(valorDevolvido * 8)) // terceira chamada do then faz resultado da segunda chamada * 8
    // posso fazer quantas chamadas for necessário

