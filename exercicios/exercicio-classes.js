// Classes JavaScript - Use a palavra-chave classpara criar uma classe. Sempre adicione um método chamado constructor().
// Uma classe JavaScript não é um objeto, é um modelo para objetos JavaScript.
/*
    Sintaxe:
    class ClassName {
        constructor() { ... }
        method_1() { ... }
        method_2() { ... }
        method_3() { ... }
    }
*/
// Exemplo:
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
    }




// Quando você tem uma classe, você pode usar a classe para criar objetos:
let myCar1 = new Car("Ford", 2014)
let myCar2 = new Car("Audi", 2019)
console.log("Carro 1: ", myCar1)
console.log("Carro 2: ", myCar2)
console.log(typeof Car)
console.log(typeof myCar1)
// O exemplo acima usa a classe Car para criar dois objetos Car.


// Exercício, crie um método que retorne a idade do carro.
{
    class Carro {
        constructor(nome, ano){
            this.nome = nome
            this.ano = ano
        }
        idade(){
            let data = new Date()
            return data.getFullYear() - this.ano
        }
    }

    let meuCarro = new Carro("Sandero", 2013)
    console.log(`Meu carro tem ${meuCarro.idade()} anos.`)
}


// 