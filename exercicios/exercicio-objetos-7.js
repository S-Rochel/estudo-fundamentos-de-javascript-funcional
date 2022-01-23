// Conjuntos JavaScript.
/* 
Um conjunto JavaScript é uma coleção de valores exclusivos.

Cada valor só pode ocorrer uma vez em um Set.

Um Set pode conter qualquer valor de qualquer tipo de dados.

Um conjunto é um objeto.
*/

/*
Método	       Descrição
new set()      Cria um novo conjunto
add()	       Adiciona um novo elemento ao conjunto
delete()       Remove um elemento de um Set
has()	       Retorna verdadeiro se existir um valor
clear()	       Remove todos os elementos de um Set
forEach()	   Invoca um retorno de chamada para cada elemento
values()	   Retorna um Iterator com todos os valores em um Set
keys()	       O mesmo que valores()
entries()	   Retorna um Iterator com os pares [value,value] de um Set

Propriedade	   Descrição
Size           Retorna os elementos numéricos em um Set
*/


// Como criar um conjunto:
/*
Passando um array para new Set()
Crie um novo Set e use add() para adicionar valores
Crie um novo Set e use add() para adicionar variáveis
*/


// new Set() - método construtor de conjuntos.
// Exemplo, passando um Array para o construtor new Set():
const letras = new Set(["A", "B", "C", "D"])
console.log(letras)


// Exemplo, criar um set e passar valores literais:
const nomes = new Set()
nomes.add("Sandro")
nomes.add("Silvana")
nomes.add("Pedro")
console.log(nomes)


// Exemplo, criando um set e adicionando variáveis.
const a = "1a"
const b = "1b"
const c = "1c"
const d = "1c"
const letrasNum = new Set()
letrasNum.add(a)
letrasNum.add(b)
letrasNum.add(c)
letrasNum.add(d) // se adicionar elementos iguais, apenas o primeiro será salvo.
console.log(letrasNum)



// forEach() - Este método invoca uma função para cada elemento Set.
// Exemplo:
const frutas = new Set(["Laranja", "Pêra", "Maçã"])
let res = ""
frutas.forEach(function(value){
    console.log(value)
})


// values() - Este método retorna um objeto Iterator contendo todos os valores em um Set.
// Exemplo: 
todasFrutas =  frutas.values()
console.log(todasFrutas)


// Usando o objeto Iterator para acessar os elementos.
// Exemplo:
const frutasIterador = frutas.values()
for (const entry of frutasIterador){
    console.log("=>", entry)
}


// keys() - Como um set não tem chaves, este método retorna o mesmo que o método values(). Isso torna os conjuntos compatíveis com Maps.
// Exemplo:
console.log("keys() =>", frutas.keys())
console.log("values() =>", frutas.values())


// entries() - Este método retorna pares [valor,valor] em vez de pares [chave,valor]. Isso torna os Conjuntos compatíveis com Maps.
// Exemplo: 
const novoIterador = frutas.entries()
for (const entry of novoIterador){
    console.log("entries() => ", entry)
}


