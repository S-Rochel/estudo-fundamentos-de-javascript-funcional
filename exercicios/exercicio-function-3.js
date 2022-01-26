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



// 