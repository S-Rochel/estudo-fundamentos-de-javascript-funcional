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



// Esperando um tempo limite - Ao usar a função JavaScript setTimeout(), você pode especificar uma função de retorno de chamada a ser executada no tempo limite.
// Exemplo 1, passando nome de uma função como argumento:
{
    setTimeout(fnTeste, 3000);
    function fnTeste() {
        console.log("Chamando uma função callback.")
    }
} // neste exemplo fnTeste é usado como callback, e será chamado após 3 segundos.

// Exemplo 2, passando uma função inteira como argumento:
{
    setTimeout(function() {fnTeste("Passando uma função inteira.")}, 3000);
    function fnTeste(valor) {
        console.log(valor);
    }
}



// Aguardando Intervalos - Ao usar a função JavaScript setInterval(), você pode especificar uma função de retorno de chamada a ser executada para cada intervalo.
// Exemplo: 
{
    setInterval(fnTeste, 2000);
    function fnTeste() {
        let d = new Date();
        console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
    }
} // neste exemplo a função fnTeste é usado como callback, e será executada à cada dois segundos.



// Promisses, Objeto de promessa JavaScript - Um objeto JavaScript Promise contém o código de produção e as chamadas para o código de consumo.
// Sintaxe da promessa:
{
    let myPromise = new Promise(function(myResolve, myReject) {
        // "Produção de código" (pode levar algum tempo)
        
          myResolve(); // quando bem sucedido, valor do resultado
          myReject();  // quando houver erro, objeto de erro
        });
        
        // "Consumindo Código" (Deve esperar por uma promessa cumprida)
        myPromise.then(
          function(value) { /* código se for bem sucedido */ },
          function(error) { /* código se houver algum erro */ }
        );
}


// Usando uma Promisse.
/*
    myPromise.then(
  function(value) { // code if successful  },
  function(error) { // code if some error  }
  );
  Promise.then() recebe dois argumentos, um callback para sucesso e outro para falha.
  
  Ambos são opcionais, portanto, você pode adicionar um retorno de chamada apenas para sucesso ou falha.
*/
// Exemplo:
{
    function myDisplayer(some) {
        console.log("Testando Promessas: ", some);
      }
      
      let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0;      
      // O código de produção (isso pode levar algum tempo)      
        if (x == 0) {
          myResolve("OK");
        } else {
          myReject("Error");
        }
      });
      
      myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
      );
}


// Async - A palavra-chave asyncantes de uma função faz com que a função retorne uma promessa.
// Exemplo:
{
    async function myFunction() {
        return "Hello";
    }
    myFunction().then(
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
}


// Await - A palavra-chave await antes de uma função faz com que a função espere por uma promessa. A palavra-chave await só pode ser usada dentro de uma função async.
// Exemplo da sintaxe básica:
{
    async function myDisplay() {
        let myPromise = new Promise(function(resolve, reject) {
          resolve("I love You !!");
        });
        console.log(await myPromise);
      }
      
      myDisplay();
}