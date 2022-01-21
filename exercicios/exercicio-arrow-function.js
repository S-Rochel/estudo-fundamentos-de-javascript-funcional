// Arrow Function

// Uma Arrow Function nos permitem escrever uma sintaxe de função mais curta.
// Exemplo:
{
    let funcaoSeta = (a, b) => { return a * b}
    console.log(funcaoSeta(5, 5))
}


// Se a função tiver apenas uma instrução e a instrução retornar um valor, você poderá remover os colchetes e a palavra chave return.
// Exemplo:
{
    let funcaoSeta = (a, b) => a * b
    console.log(funcaoSeta(4, 4))
}


// se você tiver apenas um parâmetro, também poderá pular os parênteses.
// Exemplo:
{
    let funcaoSeta = texto => `${texto}, tudo bem!`
    console.log(funcaoSeta("Olá"))
}


// Com arrow function, a palavra-chave this sempre representa o objeto que definiu a arrow function.

{
    let funcaoSeta = () => this.toString()
    console.log(funcaoSeta())
} // Com uma arrow function this representa o proprietário da função.

{
    let fn = function(){
        return this.toString()
    }
    console.log (fn())
} // Com uma função regular this representa o objeto que chama a função.



// 