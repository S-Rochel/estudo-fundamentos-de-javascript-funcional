// Operador condicional ternário - JavaScript também contém um operador condicional que atribui um valor a uma variável com base em alguma condição.
{
    let idade = 16
    let menorIdade = (idade <= 18) ? "Verdadeiro" : "Falso"
    console.log( menorIdade)
}


// if - instrução para especificar um bloco de código JavaScript a ser executado se uma condição for verdadeira.
{
    let num = 17
    if (num == 17){
        console.log("Verdadeiro...")
    }
}



// else - instrução para especificar um bloco de código a ser executado se a condição for falsa.
{
    let num = 18
    if (num == 17){
        console.log("Verdadeiro...")
    } else {
        console.log("Falso...")
    }
}


// else if - instrução para especificar uma nova condição se a primeira condição for falsa.
{
    let num = 26
    if (num > 16 && num < 18){
        console.log("Verdadeiro...")
    } else if (num > 18 && num < 23){
        console.log("Falso...")
    } else {
        console.log("Número fora do específicado")
    }
}


// switch - a expressão switch é avaliada uma vez, ai compara os valores da expressão com cada caso, se existir um caso co valor igual o bloco de código nele será executado, se não o bloco de códiigo padrão será executado.
{
    let x = 500
    switch (x){
        case 100:
            console.log("Primeriro bloco de código")
            break        
        case 200:
            console.log("Segundo bloco de código")
            break             
        case 300:
            console.log("Terceiro bloco de código")
            break  
        default:   
            console.log("Nenhuma das alternativas foi válida...")   
    }
}
{
    switch (new Date().getDay()) {
        case 0:
          day = "Domingo";
          break;
        case 1:
          day = "Segunda-feira";
          break;
        case 2:
           day = "Terça-feira";
          break;
        case 3:
          day = "Quarta-feira";
          break;
        case 4:
          day = "Quuinta-feira";
          break;
        case 5:
          day = "Sexta-feira";
          break;
        case 6:
          day = "Sabádo";
      }
      console.log(day)
}