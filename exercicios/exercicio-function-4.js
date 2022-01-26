// Encerramento de JavaScript.

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();

  console.log(add()) // Isso retorna 4

  /*
  Explicação:
  A variável add é atribuída ao valor de retorno de uma função de auto-invocação.

  A função de auto-invocação é executada apenas uma vez. Ele define o contador como zero (0) e retorna uma expressão de função.

  Desta forma add se torna uma função. A parte "maravilhosa" é que ele pode acessar o contador no escopo pai.

  Isso é chamado de encerramento de JavaScript . Torna possível que uma função tenha variáveis ​​" privadas ".

  O contador é protegido pelo escopo da função anônima e só pode ser alterado usando a função add.

  Um encerramento é uma função que tem acesso ao escopo pai, mesmo após o fechamento da função pai.
  */