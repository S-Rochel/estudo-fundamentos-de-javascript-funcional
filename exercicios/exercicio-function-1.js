// Definição de Função JavaScript.
/*
 Declaração de funções - As funções declaradas não são executadas imediatamente. Eles são "salvos para uso posterior" e serão executados posteriormente, quando forem invocados (chamados).
 Sintaxe:
        function functionName(parameters) {
            >> Código à ser executado <<
        }
obs: Os pontos e vírgulas são usados ​​para separar instruções JavaScript executáveis.
Como uma declaração de função não é uma instrução executável, não é comum terminá-la com um ponto e vírgula.


Expressão de função - Uma expressão de função pode ser armazenada em uma variável
Exemplo:
        const x = function (a, b) {return a * b}
obs: Depois que uma expressão de função foi armazenada em uma variável, a variável pode ser usada como uma função.
Exemplo:
        const x = function (a, b) {return a * b};
        let z = x(4, 3);        
obs: A função acima é na verdade uma função anônima (uma função sem nome).
As funções armazenadas em variáveis ​​não precisam de nomes de função. Eles são sempre invocados (chamados) usando o nome da variável.
A função acima termina com um ponto e vírgula porque faz parte de uma instrução executável.
*/


// O Construtor Function() - As funções também podem ser definidas com um construtor de função JavaScript embutido chamado Function().
/*
Exemplo:
        const myFunction = new Function("a", "b", "return a * b");
        let x = myFunction(4, 3);
obs: Na verdade, você não precisa usar o construtor de função. O exemplo acima é o mesmo que escrever:
        const myFunction = function (a, b) {return a * b};
        let x = myFunction(4, 3);
*/


// Funções de auto-invocação - As expressões de função podem ser "auto-invocadas". As expressões de função serão executadas automaticamente se a expressão for seguida por () e ter () adicionado ao redor da função para indicar que é uma expressão de função. Você não pode auto-invocar uma declaração de função.
// Exemplo:
{
        (function () {
                let x = "Hello!!";
                console.log(x)
              })();
}


// Diferença entre método e construtor
/*
Uma função definida como propriedade de um objeto é chamada de método para o objeto.
Uma função projetada para criar novos objetos é chamada de construtor de objetos.
*/

// O objeto de argumentos.
/*
As funções JavaScript têm um objeto embutido chamado de objeto de argumentos.
O objeto argument contém uma matriz dos argumentos usados ​​quando a função foi chamada (invocada).
*/
// Dessa forma, você pode simplesmente usar uma função para encontrar (por exemplo) o valor mais alto em uma lista de números.
{
        x = findMax(1, 123, 500, 115, 44, 88);

        function findMax() {
          let max = -Infinity;
          for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
              max = arguments[i];
            }
          }
          return max;
       }
       console.log(x)
}
// Somar todos os valores de entrada.
{
        x = sumAll(1, 123, 500, 115, 44, 88);

        function sumAll() {
          let sum = 0;
          for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
          }
          return sum;
        }
        console.log(x)
}