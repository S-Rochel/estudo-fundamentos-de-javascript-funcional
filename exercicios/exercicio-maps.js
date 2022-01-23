// Mapas JavaScript.
/*
Um Map contém pares de chave-valor em que as chaves podem ser de qualquer tipo de dados.
Um mapa lembra a ordem de inserção original das chaves.
Um Mapa tem uma propriedade que representa o tamanho do mapa.
Mapas são objetos.


Diferenças entre Objetos e Maps:
	              Objeto	                                       Mapa
Iterável	      Não diretamente iterável	                       Diretamente iterável
Tamanho  	      Não tem uma propriedade de tamanho	           Tem uma propriedade de tamanho
Tipos de chave	  As chaves devem ser Strings (ou Símbolos)	       As chaves podem ser qualquer tipo de dados
Pedido de chave	  As chaves não estão bem ordenadas	               As chaves são ordenadas por inserção
Padrões	          Tem chaves padrão	                               Não tem chaves padrão



Métodos de Map
Método	      Descrição
new Map()	  Cria um novo objeto Map
set()	      Define o valor de uma chave em um mapa
get()	      Obtém o valor de uma chave em um mapa
clear()	      Remove todos os elementos de um mapa
delete()	  Remove um elemento Map especificado por uma chave
has()	      Retorna verdadeiro se existir uma chave em um mapa
forEach()	  Invoca um retorno de chamada para cada par de chave/valor em um mapa
entries()	  Retorna um objeto iterador com os pares [chave, valor] em um mapa
keys()	      Retorna um objeto iterador com as chaves em um mapa
values()	  Retorna um objeto iterador dos valores em um mapa

Propriedade	  Descrição
size	      Retorna o número de elementos Map
*/


// Criar um Map passando um Array para o construtor new Map().
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    console.log(frutas)    
}


// Map.set() - Este método adiciona ou altera elementos de um Map exixtente.
// Exemplo:
{
    const frutas = new Map()
    frutas.set("Maçã", 3.99)
    frutas.set("Limão", 2.00)
    frutas.set("Pêra", 7.45)
    console.log(frutas)
    frutas.set("Maçã", 5.10)
    console.log(frutas)
}


// Map.get() - Este médoto obtém o valor de uma chave em um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    console.log("Método get() = ", frutas.get("Uva"))
}


// size() - Esta propriedade retorna o número de elementos em um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    console.log("Propriedade size() = ", frutas.size)
}


// Map.delete() - Este método retorna um elemento de um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    console.log("Método delete() = ", frutas.delete("Maçã"))
    console.log(frutas)
}


// Map.clear() - Este método remove todos os elementos de um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    console.log("Método clear() = ", frutas.clear())
    console.log(frutas)
}


// Map.has() - Este método retorna true se existir uma chave com um determinado valor em um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    console.log("Método has() = ", frutas.has("Uva"))
}


// Map.forEach() - Este método invoca um retorno de chamada para cada par de chave/valor em um Map.
// Exempplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    frutas.forEach(function(valor, chave){
        console.log("Método forEach() = ", chave + " " + valor)
    })
}


// Map.keys() - Este método retorna um objeto iterador com as chaves em um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    let frutaDoce = " "
    for (const x of frutas.keys()){
        frutaDoce += x + ", "
    }
    console.log("Método keys() = ", frutaDoce)
}


// Map.values() - Este método retorna um objeto iterador com os valores em um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    let total = 0
    for (const x of frutas.values()){
        total += x 
    }
    console.log("Método values() = ", total)
}


// Map.entries() - Este é um método que retorna um objeto iterador com os [keys, values] em um Map.
// Exemplo:
{
    const frutas = new Map([
        ["Banana", 2.89],
        ["Uva", 4.00],
        ["Maçã", 6.55]
    ])
    let texto = " "
    for (const x of frutas.entries()){
        texto += x + " --> "
    }
    console.log("Método entries() = ", texto)
}


// Usando Objetos como chaves - Ser capaz de usar objetos como chaves é um importante recurso do Mapa.
// Exemplo:
{
    // cria objetos
    const pera = {nome: "Pêra"}
    const banana = {nome: "Banana"}
    const uva = {nome: "Uva"}
    // cria um Map
    const frutas = new Map()
    // adiciona novos elementos ao Map
    frutas.set(pera, 2.89)
    frutas.set(banana, 3.00)
    frutas.set(uva, 4.60)

    console.log(frutas)
}