// Iterávies de Objeto JavaScript.
// Objetos iteráveis ​​são objetos que podem ser iterados com for..of.

// Iterando sobre uma String.
// Exemplo: 
for (const x of "O rato roeu a roupa do Rei de Roma"){
    console.log(x)
}

// Iternado sobre um array.
// Exemplo:
for (const x of ["1a1", "1b1", "1c1", "1d1"]){
    console.log(x)
}


/*
 O protocolo iterador define como produzir uma sequência de valores de um objeto.

Um objeto se torna um iterador quando implementa um next()método.

O next()método deve retornar um objeto com duas propriedades:

valor (o próximo valor)
feito (verdadeiro ou falso)

valor	O valor retornado pelo iterador
        (pode ser omitido se done for true)
feito	true se o iterador tiver concluído
        false se o iterador tiver produzido um novo valor
*/
// Exemplo:
function numero () {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return {value: n, done: false}
        }
    }
}

const i = numero()
console.log(i.next().value + " " + i.next().done)
console.log(i.next().value + " " + i.next().done)
console.log(i.next().value + " " + i.next().done)
console.log(i.next().value + " " + i.next().done)

// Iterável caseiro não suporta o laço for...of.



// JavaScript Iterável.
/*
Um JavaScript iterável é um objeto que possui um Symbol.iterator .

O Symbol.iteratoré uma função que retorna uma next()função.

Um iterável pode ser iterado com o código: for (const x of iterable) { }
*/
// Exemplo:
meusNumeros = {} // cria um objeto

meusNumeros[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {done = true}
            return {value: n, done: done}
        }
    }
}
for (const num of meusNumeros){
    console.log("=> ", num)
}

// ou chamndo o metódo Symbol.iterator manualmente.
let iterator = meusNumeros[Symbol.iterator]();
while (true) {
    const result = iterator.next();
    if (result.done) break;
    console.log(`>> ${result.value} <<`)
}


