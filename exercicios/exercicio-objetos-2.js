// Métodos de Objetos JavaScript.

// A palavra chave this - Em um objeto this refere-se ao objeto.
// Exemplo:
const pessoa = {
    nome: "John",
    sobreNome: "Doe",
    nomeCompleto: function() {
        return this.nome + " " + this.sobreNome
    }
}


// Métodos em JavaScript - Os métodos JavaScript são ações que podem ser executadas em objetos. Um método JavaScript é uma propriedade que contém uma definição de função. Métodos são funções armazenadas como propriedades de objetos.
/* Sintaxe: nomeObjeto.nomeMetodo() */
// Exemplo:
console.log(pessoa.nomeCompleto())


// Adicionar um método a um objeto:
// Exemplo:
pessoa.saudacao = function() {
    return "Olá " + pessoa.nomeCompleto() + " ,tudo bem?"
};
console.log(pessoa.saudacao())


// Exebição de Objetos - A exibição de um objeto JavaScript resultará em [object Object] .
/*
Algumas soluções comuns para exibir objetos JavaScript são:
Exibindo as propriedades do objeto por nome
Exibindo as propriedades do objeto em um loop
Exibindo o objeto usando Object.values()
Exibindo o objeto usando JSON.stringify()
*/

// Exibindo as proprieadades do objeto como string:
console.log(pessoa.nome)

// Exibindo as proprieadades do objeto em um loop:
for (let p in pessoa) {
    let x = pessoa[p] + " "
    console.log(x)
}

// Exibindo as proprieadades do objeto com Object.values() - Qualquer objeto JavaScript pode ser convertido em uma matriz usando Object.values():
const minhaArray = Object.values(pessoa)
console.log(minhaArray)

// Exibindo as proprieadades do objeto com JSON.stringify() - Qualquer objeto JavaScript pode ser encadeado (convertido em uma string) com a função JavaScript JSON.stringify(). O resultado será uma string seguindo a notação JSON:
/* 
O JSON.stringify() não converte funções em string, mas podemos fazer isso convertendo as funções em string antes de stringificar.
*/
pessoa.nomeCompleto = pessoa.nomeCompleto.toString() // transformar uma função em string
const minhaString = JSON.stringify(pessoa)
console.log(minhaString)

// 