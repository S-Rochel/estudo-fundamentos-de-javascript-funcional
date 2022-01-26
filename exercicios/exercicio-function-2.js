// Invocação de função javascript

// Essa é uma maneira comum de invocar uma função JavaScript, mas não é uma prática muito boa. Variáveis, métodos ou funções globais podem facilmente criar conflitos de nomes e bugs no objeto global.
// Exemplo: 
{
    function myFunction(a, b) {
        return a * b;
      }
      window.myFunction(10, 2);
}


// Quando uma função é chamada sem um objeto proprietário, o valor de this se torna o objeto global.
/* 
Em um navegador da Web, o objeto global é a janela do navegador.
Este exemplo retorna o objeto window como o valor de this.
Invocar uma função como uma função global faz com que o valor disso seja o objeto global.
Usar o objeto de janela como uma variável pode facilmente travar seu programa.
*/
// Exemplo: 
{
    let x = myFunction();            // x será o objeto de janela
    function myFunction() {
      return this;
    }
}


// Invocando uma função como um método - Em JavaScript você pode definir funções como métodos de objetos.
/* 
    O método fullName é uma função. A função pertence ao objeto. myObject é o proprietário da função.
    A coisa chamada this, é o objeto que "possui" o código JavaScript. Nesse caso, o valor de this é myObject .
*/
// Exemplo:
{
    const myObject = {
        firstName:"John",
        lastName: "Doe",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        }
      }
      myObject.fullName();   
}


// Invocando uma função com um construtor de função.
/*
Se uma invocação de função for precedida pela newpalavra-chave, é uma invocação de construtor.
Parece que você cria uma nova função, mas como as funções JavaScript são objetos, você realmente cria um novo objeto
Uma invocação de construtor cria um novo objeto. O novo objeto herda as propriedades e métodos de seu construtor.
O valor de thisserá o novo objeto criado quando a função for invocada.
*/
// Exemplo: 
{
    // Esta é uma função construtora:
    function myFunction(arg1, arg2) {
      this.firstName = arg1;
      this.lastName  = arg2;
    }
  
    // Isso cria um novo objeto
    const myObj = new myFunction("John", "Doe");
  
    // Isso vai retornar "John"
    myObj.firstName;
}