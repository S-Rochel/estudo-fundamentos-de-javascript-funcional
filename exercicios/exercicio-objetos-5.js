// Protótipos de Objetos JavaScript.
/*
Exemplo:
Herança de protótipo
Todos os objetos JavaScript herdam propriedades e métodos de um protótipo:

Date objetos herdam de Date.prototype
Array objetos herdam de Array.prototype
Person objetos herdam de Person.prototype
O Object.prototypeestá no topo da cadeia de herança do protótipo:

Dateobjetos, Arrayobjetos e Personobjetos herdam de Object.prototype.
*/


// A propriedade JavaScript prototype permite adicionar novas propriedades aos construtores de objetos.
// Exemplo:
{
    function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
      }
      
      Person.prototype.nationality = "English";
      const meuPai = new Person("Pedro", "Doe", "Azul")
      console.log(meuPai.nationality)
}


// A propriedade JavaScript prototype também permite adicionar novos métodos aos construtores de objetos.
// Exempplo:
{
    function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
      }
      
      Person.prototype.name = function() {
        return this.firstName + " " + this.lastName;
      };

      const meuFilho = new Person("Joaquim", "Doe", "Pretos")
      console.log(meuFilho.name())
}