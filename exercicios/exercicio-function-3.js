// Chamada de função JavaScript - Reutilização de Método

// call() - Este é um método JavaScript predefinido, ele pode ser usado para invocar um método com um objeto proprietário como argumento. Com call(), um objeto pode usar um método pertencente a outro objeto.
// Exemplo:
{
    const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      
      // Isso vai retornar "John Doe":
      person.fullName.call(person1);
}


// O método call() também pode aceitar argumentos.
// Exemplo:
{
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      person.fullName.call(person1, "Oslo", "Norway");
}



// apply() - Com este método você pode escrever um método que pode ser usado em diferentes objetos, ele é semelhante ao método call().
/*
O método apply() é muito útil se você quiser usar um array em vez de uma lista de argumentos.
*/
// Exemplo:
{
    const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const person1 = {
        firstName: "Mary",
        lastName: "Doe"
      }
      
      // Isso vai retornar "Mary Doe":
      person.fullName.apply(person1);
}


// O método apply() aceita argumentos em um array:
// Exemplo:
{
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      person.fullName.apply(person1, ["Oslo", "Norway"]);
}


// Usando o método apply() para encontrar o maior número em uma lista de números, juntamente com o método Math.max().
// Como os arrays JavaScript não têm um método max(), podemos usar:
{
    Math.max.apply(null, [1,2,3]); // Isso vai retornar 3
}




// Diferença entre call() e apply().
/*
    O call() método recebe argumentos separadamente .

    O apply() método recebe argumentos como um array .
*/