// .sort() - método classifica um array em ordem alfabética:
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.sort())
}


// .reverse() - método inverte os elementos em uma matriz:
{
    const letra = ['A', 'B', 'C', 'D']
    console.log(letra.reverse())
}


// .sort() - Para utilizar o método .sort() para classificar tipos númericos devemos utilizar uma função para comparar os elementos
{
    const points = [40, 100, 1, 5, 25, 10];
    console.log(points.sort(function(a, b){return a - b}));
} // em ordem crescente 'a - b'

{
    const points = [40, 100, 1, 5, 25, 10];
    console.log(points.sort(function(a, b){return b - a}));
} // em ordem decrescente 'b - a'

{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return 0.5 - Math.random()});
} // em ordem aleatória 'return 0.5 - Math.random()'


// Encontrar o número com valor mais alto em uma array:
{
    const points = [40, 100, 1, 5, 25, 10];
    const maiorNum = function myArrayMax(array) {
                        return Math.max.apply(null, array);
                     }
      console.log(`Maior número com Math.max.apply: ${maiorNum(points)}`)
} // Com  Math.max.apply


{
    const points = [40, 100, 1, 5, 25, 10];
    const res = function myArrayMax(array) {
                    let len = array.length;
                    let max = -Infinity;
                    while (len--) {
                        if (array[len] > max) {
                             max = array[len];
                        }
                    }
                    return max;
                }
    console.log(`Número mais alto com método caseiro: ${res(points)}`)
} // Com método Caseiro




// Encontrar o menor número em uma matriz:
{
    const points = [40, 100, 1, 5, 25, 10];
    const menorNum = function myArrayMax(array) {
                        return Math.min.apply(null, array);
                     }
      console.log(`Menor número com Math.min.apply: ${menorNum(points)}`)
} // Com Math.min.apply

{
    const points = [40, 100, 1, 5, 25, 10];
    const res = function myArrayMin(array) {
                    let len = array.length;
                    let min = Infinity;
                    while (len--) {
                        if (array[len] < min) {
                             min = array[len];
                        }
                    }
                    return min;
                }
    console.log(`Número mais baixo com método caseiro: ${res(points)}`)
} // Com método Caseiro
