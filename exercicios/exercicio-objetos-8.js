// REFERÊNCIAS DE OBJETOS


// Gerenciando objetos:
// Object.create() - Criar objeto com um objeto já existente como protótipo.

// Object.defineProperty(object, property, {value : value}) - Adicionar ou alterar uma propriedade de objeto.

// Object.defineProperties(object, descriptors) - Adiciona ou altera as propriedades do objeto.

// Object.getOwnPropertyDescriptor(object, property) - Acessa as propriedades.

// Object.getOwnPropertyNames(object) - Retorna todas as propriedades como um array.

// Object.getPrototypeOf(object) - Acessa o protótipo.

// Object.keys(object) - Retorna propriedades enumeráveis como uma matriz.



// Protegendo Objetos
// Object.preventExtensions(object) - Evita adicionar propriedades a um objeto.

// Object.isExtensible(object) - Retorna verdadeiro se as propriedades puderem ser adicionadas ao objeto.

// Object.seal(object) - Evita alterações nas propriedades do objeto (não valores).

// Object.isSealed(object) - Retorna verdadeiro se o objeto estiver selado.

// Object.freezer(object) - Impede qualquer alteração em um objeto.

// Object.isFrozen(object) - Retorna verdadeiro se o objeto estiver congelado.



// Alterando um valor de propriedade.
const pessoa = {
    nome: "John",
    sobrenome: "Doe",
    lingua: "EN"
};
console.log(pessoa)
Object.defineProperty(pessoa, "lingua", {value: "NO"})
console.log(pessoa)


/*
Alterando Metadados.

writable : true     // O valor da propriedade pode ser alterado.
enumerable : true   // A propriedade pode ser enumerável.
configurable : true // A Propriedade pode ser configurada.

writable : false     // O valor da propriedade não pode ser alterado.
enumerable : false   // A propriedade não pode ser enumerável.
configurable : false // A Propriedade não pode ser configurada.
*/
// Este exemplo torna a linguagem somente leitura.
Object.defineProperty(pessoa, "lingua", {writable:false});

// Este exemplo torna a linguagem não enumerável.
Object.defineProperty(pessoa, "lingua", {enumerable:false});

// Este exemplo lista todas as propriedades de um objeto e retorna em um array.
{
    const person = {
        firstName: "John",
        lastName : "Doe",
        language : "EN"
      };
      
      Object.defineProperty(person, "language", {enumerable:false});
      let res = Object.getOwnPropertyNames(person); 
      console.log(res)
}

// Este exemplo lista apenas as propriedades enumeráveis ​​de um objeto e retorna um array.
{
    const person = {
        firstName: "John",
        lastName : "Doe",
        language : "EN"
      };
      
      Object.defineProperty(person, "language", {enumerable:false});
      let res = Object.keys(person); 
      console.log(res)
}


// Este exemplo adiciona uma nova propriedade a um objeto.
{
    const person = {
        firstName: "John",
        lastName : "Doe",
        language : "EN"
      };
      Object.defineProperty(person, "year", {value:"2008"});
      console.log(person.year)
      console.log(person)
}


// Object.defineProperty() - Este método também pode ser usado para adicionar Getters e Setters.
{
    const person = {firstName:"John", lastName:"Doe"};
    Object.defineProperty(person, "fullName", {
        get: function () {return this.firstName + " " + this.lastName;}
      });
      console.log(person.fullName)
}
