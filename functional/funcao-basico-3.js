// Arrow Function

const fn1 = () => {
    return console.log ('Bom dia!')
}
fn1()

const fn2 = () => console.log ('Boa tarde!')
fn2()



const sum = array => {
    let total = 0
    for (let n of array){
        total += n
    }
    return total
}
console.log(sum([1,1,1,1,1]))


// função dentro de função com Arrow Function:
const potencia = (base) => (exp) => Math.pow (base, exp)
console.log(potencia(2)(2))