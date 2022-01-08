// gerar uma função que receba valores variados e retorne como resposta o sequinte (1 parâmetro = retornar um array com a quantidade de valores igual ao parâmetro), (2 parâmetros = o 1º parâmetro será o início do array e o 2º parâmetro será o final do array), (3 parâmetros = o 1º parâmetro será o início do array, o 2º parâmetro será o final do array  e o 3º parâmetro será o intervalo)

function range (a, b, s = 1){
    const n1 = b == undefined ? 1 : a // se b for indefinido, n1 recebe 1, caso contrário n1 recebe o valor de b
    const n2 = b == undefined ? a : b // se b for indefinido, n2 recebe a, caso o valor de b seja passado n2 recebe o valor de b

    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s) // se o valor de n1 < n2, step recebe o valor de s como um absoluto positivo, caso contrário step recebe o valor de s como um absoluto negativo

    const nums = []

    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step){ // se o valor de n1 for menor ou n2 mantenho i >= n2, caso contrário inverto a lógica
        nums.push(i)  // adiciona o valor de i ao array nums
    }
    return nums
}

// Senário 1 = range[5] -> [1, 2, 3, 4, 5]
console.log (range(5))

// Senário 2 = range[6, 11] -> [6, 7, 8, 9, 10, 11]
console.log (range(6, 11))

// Senário 3 = range[10, 19, 2] -> [10, 12, 14, 16, 18]
console.log (range(10, 19, 2))

// Senário 4 = range[6, 2] -> [6, 5, 4, 3, 2]
console.log (range(6, 2))

// Senário 5 = range[8, -3, 4] -> [8, 4, 0]
console.log (range(8, -3, 4))