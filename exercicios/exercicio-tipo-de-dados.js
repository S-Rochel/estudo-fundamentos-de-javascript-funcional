// typeof - Tipos de dados em JavaScript
/*
Em JavaScript existem 5 tipos de dados diferentes que podem conter valores:
string
number
boolean
object
function

Existem 6 tipos de objetos:
Object
Date
Array
String
Number
Boolean

E 2 tipos de dados que não podem conter valores:
null
undefined

exemplos:
typeof "John"                 // Retorna "string"
typeof 3.14                   // Retorna "number"
typeof NaN                    // O tipo de dados "NaN" é número, retorna "number"
typeof false                  // Retorna "boolean"
typeof [1,2,3,4]              // O tipo de dados de uma matriz é objeto, retorna "object"
typeof {name:'John', age:34}  // Retorna "object"
typeof new Date()             // O tipo de dados de uma data é objeto, retorna "object"
typeof function () {}         // Retorna "function"
typeof myCar                  // O tipo de dados de uma variável indefinida é retorna "undefined"
typeof null                   // O tipo de dados de null é objeto
*/

// constructor Esta propriedade retorna a função construtora para todas as variáveis ​​JavaScript.
/*
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
*/


