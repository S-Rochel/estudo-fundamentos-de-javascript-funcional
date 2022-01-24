// Map contém pares de chave-valor em que as chaves podem ser de qualquer tipo de dados.

// new Map() - Você pode criar um Map passando um Array para o new Map()construtor:
const frutas = new Map([
    ["Maça", 7.80],
    ["Banana", 2.50],
    ["Laranja", 2.00]
])
    

// adicionar elementos a um Map com o set() método:
frutas.set("Uva", 8.35)


// alterar elementos de um Map com o set() método:
frutas.set("Maça", 5.99)   


// get() - Este método obtém o valor de uma chave em um Map:
console.log(frutas.get("Uva"))


// size - Esta propriedade retorna o número de elementos em um Map:
console.log(frutas.size)


// delete() - método remove um elemento Map:
frutas.delete("Uva")


// has() - Este método retorna true se existir uma determinada chave em um Map:
console.log(frutas.has("Banana"))


// forEach() - Este método chama uma função para cada par chave/valor em um Map:
frutas.forEach (function(value, key){
    console.log(`Para a chave ${key} temos o valor ${value}`)
})


// entries() - Este método retorna um objeto iterador com a [chave, valores] em um Mapa:
for (const x of frutas.entries()){
    console.log(x.toString())
}


// 


console.log("Map: ", frutas)