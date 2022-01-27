// JavaScript Assíncrono - Retornos de chamada JavaScript.
/*
Um retorno de chamada é uma função passada como argumento para outra função
Esta técnica permite que uma função chame outra função
Uma função de retorno de chamada pode ser executada após a conclusão de outra função
*/

// Sequência de funções - As funções JavaScript são executadas na sequência em que são chamadas. Não na sequência em que são definidos.
// Exemplo:
{
    function myFirst() {
        return ("Hello");
      }
      
      function mySecond() {
        return ("Goodbye");
      }      
      console.log(myFirst());
      console.log(mySecond());
      console.log(myFirst());
}


// Controle de Sequência.
/*
   Às vezes você gostaria de ter um melhor controle sobre quando executar uma função.
   Suponha que você queira fazer um cálculo e, em seguida, exibir o resultado.
   Você pode chamar uma função de calculadora ( myCalculator), salvar o resultado e depois chamar outra função ( myDisplayer) para exibir o resultado
*/
// Exemplo 1:
{
    function meuDisplay(soma) {
        console.log("Resultado da soma: ", soma)
    }

    function calculadora(num1, num2) {
        let soma = num1 + num2;
        return soma;
    }
    let res = calculadora(5, 5);
    console.log(meuDisplay(res));
} // O problema com este exemplo e que será preciso chamar as duas funções para exibir o resultado.

// Exemplo 2:
{
    function meuDisplay(soma) {
        console.log("Resultado da soma: ", soma)
    }

    function calculadora(num1, num2) {
        let soma = num1 + num2;
        meuDisplay(soma);
    }
    console.log(calculadora(5, 6));
} // O problema com este exemplo é que não podemos impedir que a função calculadora exiba o resultado.


// Retornos de chamada JavaScript - Um retorno de chamada é uma função passada como um argumento para outra função.
// Exemplo:
{
    function meuDisplay(soma) {
        console.log("Resultado da soma: ", soma)
    }

    function calculadora(num1, num2, meuRetorno) {
        let soma = num1 + num2;
        meuDisplay(soma);
    }
    console.log(calculadora(6, 6, meuDisplay));
} // Neste exemplo a função meuDispay foi passado como argumento para a função calculadora, dessa maneira a função calculadora depois de terminar o cálculo executará o retorno de chamada.


