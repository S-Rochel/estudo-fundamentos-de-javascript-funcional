// Classes JavaScript - Use a palavra-chave class para criar uma classe. Sempre adicione um método chamado constructor().
/*
 Uma classe JavaScript não é um objeto, é um modelo para objetos JavaScript.

    Sintaxe:
    class ClassName {
        constructor() { ... }
        method_1() { ... }
        method_2() { ... }
        method_3() { ... }
    }

 Ao contrário de funções e outras declarações JavaScript, as declarações de classe não são içadas, isso significa que você deve declarar uma classe antes de poder usá-la.
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


/*
O Método Construtor
O método construtor é um método especial:
    Tem que ter o nome exato "construtor"
    Ele é executado automaticamente quando um novo objeto é criado
    É usado para inicializar as propriedades do objeto
Se você não definir um método construtor, o JavaScript adicionará um método construtor vazio.

Métodos de classe
Os métodos de classe são criados com a mesma sintaxe dos métodos de objeto.
*/


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



// Podemos enviar parâmetros para métodos de classe.
// Exemplo:
{
    class Carro {
        constructor(nome, ano) {
            this. nome = nome;
            this.ano = ano;
        }
        idade(x) {
            return x - this.ano
        }
    }

    let data = new Date();
    let ano = data.getFullYear();

    let novoCarro = new Carro("Honda", 2020);
    console.log("Idade do carro: ", novoCarro.idade(ano))
}


// Herança de Classe JavaScript
/*
   Para criar uma herança de classe, use a palavra-chave extends.
   Uma classe criada com uma herança de classe herda todos os métodos de outra classe.
   O método super() se refere à classe pai, ao chamar o método super() no método construtor, chamamos o método construtor do pai e obtemos acesso às propriedades e métodos do pai.

   A herança é útil para reutilização de código: reutilize propriedades e métodos de uma classe existente ao criar uma nova classe.
*/ 
// Exemplo, criar uma classe chamada "Model" que herdará os métodos da classe "Car":
{
    class Car {
        constructor(brand) {
          this.carname = brand;
        }
        present() {
          return 'I have a ' + this.carname + '...';
        }
      }
      
      class Model extends Car {
        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }
        show() {
          return this.present() + ', it is a ' + this.model;
        }
      }
      
      let myCar = new Model("Renault", "Sandero");
      console.log(myCar.present())
}


// Usando Getters e Setters nas Classes.
/*
   As classes também permitem que você use getters e setters.
Pode ser inteligente usar getters e setters para suas propriedades, especialmente se você quiser fazer algo especial com o valor antes de devolvê-los ou antes de defini-los.
Para adicionar getters e setters na classe, use as palavras-chave gete set.
*/
// Exemplo de Getter:
{
    class Car {
        constructor(brand) {
          this.carname = brand;
        }
        get cnam() {
          return this.carname;
        }
        set cnam(x) {
          this.carname = x;
        }
      }
      
      let myCar = new Car("Ford");
      console.log("get e set =>", myCar.cnam)
}
/*
  Nota: mesmo que o getter seja um método, você não usa parênteses quando deseja obter o valor da propriedade.
O nome do método getter/setter não pode ser igual ao nome da propriedade, neste caso carname.
Muitos programadores usam um caractere de sublinhado _ antes do nome da propriedade para separar o getter/setter da propriedade real:
*/
// Exemplo:
{
    class Car {
        constructor(brand) {
          this._carname = brand;
        }
        get carname() {
          return this._carname;
        }
        set carname(x) {
          this._carname = x;
        }
      }
      
      let myCar = new Car("Ford");
      console.log(myCar.carname)
}

// Exemplo de setter, mudar o carname para "Volvo":
{
    class Car {
        constructor(brand) {
          this._carname = brand;
        }
        get carname() {
          return this._carname;
        }
        set carname(x) {
          this._carname = x;
        }
      }
      
      let myCar = new Car("Ford");
      myCar.carname = "Volvo";
      console.log(myCar.carname)
}