// .toString() - O método JavaScript toString()converte um array em uma string de valores de array (separados por vírgula).
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.toString())
}


// .join() - Este método também une todos os elementos do array em uma string, pode receber um caracter como separador.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.join(', '))
}


// .pop() - Método remove o último elemento de um array:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.pop())
}


// .push() - Método adiciona um novo elemento a um array (no final):
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push('Uva')
    console.log(fruits)
}


// shift() - Método remove o primeiro elemento da matriz e "desloca" todos os outros elementos para um índice inferior.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift()
    console.log(fruits)
}


// .unshift() - método adiciona um novo elemento a um array (no início) e "desloca" os elementos mais antigos:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift('Uva')
    console.log(fruits)
}


// delete - Deleta elementos em uma posição especifica, porém deixa buracos no meio da matriz.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[2]
    console.log(fruits)
}


// .concat() - Método cria um novo array mesclando (concatenando) arrays existentes:
{
    const letras = ['A', 'B', 'C', 'D']
    const nums = ['1', '2', '3', '4']
    const uniao = letras.concat(nums, 'X')   
    console.log(uniao)
}


// .splice() - Método adiciona novos itens a uma matriz.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, 'Jaca', 'Morango', '*', 1)
    console.log(fruits)
} // o 2 significa que os elementos serão adicionados apartir do iníce 2 e o 0 significa a quantidade de elementos que deverão ser inseridos.

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 1);
    console.log(fruits)
} // dessa maneira deleta um elemento com uma posição específica indicando quantos elementos devem ser deletados apartir deste.

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1, 3);
    console.log(citrus)
} // faz um recorte na matriz apartir do index 1 até antes do index 3


// 