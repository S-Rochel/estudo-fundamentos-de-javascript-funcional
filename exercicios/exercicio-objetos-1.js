// Objetos JavaScript
/*
Em JavaScript, quase "tudo" é um objeto.

Booleanos podem ser objetos (se definidos com a palavra- newchave)
Os números podem ser objetos (se definidos com a palavra- newchave)
Strings podem ser objetos (se definidos com a palavra- newchave)
Datas são sempre objetos
Matemática são sempre objetos
Expressões regulares são sempre objetos
Arrays são sempre objetos
Funções são sempre objetos
Objetos são sempre objetos
Todos os valores JavaScript, exceto primitivos(string, number, boolean, null, undefined), são objetos.
*/

// Os valores do objeto são escritos como pares name : value (nome e valor separados por dois pontos).
// É uma prática comum declarar objetos com a palavra-chave const.
// Os valores nomeados, em objetos JavaScript, são chamados de propriedades .
// Métodos são ações que podem ser executadas em objetos.


// Criando um objeto JavaScript:
/*
Crie um único objeto, usando um literal de objeto.
    exemplo: - const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
             - const person = {}

Crie um único objeto, com a palavra-chave new Object().
    exemplo: - const person = new Object();
               person.firstName = "John";
               person.lastName = "Doe";
               person.age = 50;
               person.eyeColor = "blue";

Defina um construtor de objeto e, em seguida, crie objetos do tipo construído.
    
Crie um objeto usando Object.create().
*/


// Propriedades do Objeto JavaScript

/*
Propriedades são os valores associados a um objeto JavaScript.

Um objeto JavaScript é uma coleção de propriedades não ordenadas.

As propriedades geralmente podem ser alteradas, adicionadas e excluídas, mas algumas são somente leitura.
*/

// Para acessar as propriedades dde um objeto:
/*
nomeObjeto.propriedade => ex: carro.ano

nomeObjeto["propriedade"] => ex: carro["ano"]

nomeObjeto[esxpressão] => ex: x = ano; carro[x]
*/


// Laço for/in - A instrução JavaScript for...in percorre as propriedades de um objeto.
/* Sintaxe: for (let variável in objeto){ // código } */
// Exemplo:
const pessoa = {
    nome: "John",
    sobreNome: "Doe",
    idade: 25
};

for (let x in pessoa){
    console.log(pessoa[x])
}


// Para adicionar novas propriedades - informe a propriedade e o valor.
// Exemplo:
pessoa.nacionalidade = "Brasileiro"
console.log(pessoa)


// Para excluir uma propriedade - a palavra chave delete excluir uma propriedade de um objeto e o valor desta propriedade. O deleteoperador foi projetado para ser usado em propriedades de objetos. Não tem efeito sobre variáveis ​​ou funções.
// Exemplo:
delete pessoa.nacionalidade // ou delete pessoa["nacionalidade"]
console.log(pessoa)



// Objetos aninhados - Os valores em um objeto podem ser outro objeto.
// Exemplo:
const cadastro = {
    nome: "John",
    idade: 30,
    carro: {
        marca: "Renault",
        ano: 2013,
        cor: "Prata"
    }
}


// Para acessar Objetos Aninhados - Você pode acessar objetos aninhados usando a notação de ponto ou a notação de colchetes.
// Exemplo:
console.log(cadastro.carro.marca) 
console.log(cadastro.carro["ano"])
console.log(cadastro["carro"]["cor"])

let p1 = "carro"
let p2 = "cor"
console.log(cadastro[p1][p2])


// Matrizes e objetos aninhados - Valores em objetos podem ser arrays e valores em arrays podem ser objetos.
// Exemplo:
const meuObjeto = {
    nome: "John",
    idade: 30,
    carros: [
        {nome: "Renault", modelo: ["Sandero", "Logan", "Captur"]},
        {nome: "Chevrolet", modelo: ["Onix", "Prisma", "Tracker"]},
        {nome: "Fiat", modelo: ["Pulse", "Argo", "Toro"]}
    ]
}

// Para acessar arrays dentro de arrays, use um loop for/in para cada array.
// Exemplo:
for (let i in meuObjeto.carros) {
    console.log(`Marca: ${meuObjeto.carros[i].nome}`)
    for (let j in meuObjeto.carros[i].modelo){
        console.log(meuObjeto.carros[i].modelo[j])
    }
}


// 