// Sets - Um conjunto JavaScript é uma coleção de valores exclusivos. Cada valor só pode ocorrer uma vez em um Set.

// new Set - Criando um novo conjunto:
const letras = new Set(["a", "b", "c", "d"])

// add() - Adicionar valor para um conjunto:
letras.add("e")

// add() - Adicionar variável para um conjunto:
const var1 = "f"
letras.add(var1)

// delete() - Remove um elemento do conjunto:
letras.delete("f")

// has() - Retorna true se o valor existir no Set:
console.log(letras.has("a"))



// forEach() Este método invoca (chama) uma função para cada elemento Set:

letras.forEach(function(value){
    console.log("forEach: ", value)
})

// values() - Este método retorna um novo objeto iterador contendo todos os valores em um Set:
for (const x of letras.values()){
    console.log("for: ", x)
}

// size - Retorna o número de elementos em um conjunto:
console.log(letras.size)