// IIFE - Imediately Invoked Function Expression
(function (a, b, c) {
    let x = 3
    console.log (`Result: ${a + b + c}`)
    console.log(x)
}) (1, 2, 3); // Posso invocar uma função anônima se fazer isto imediatamente após fechar as chaves, neste caso é obrigatório colocar o ponto e virgula.


(function (){
    let x = 300
    console.log (x)
})(); 


(() => {
    console.log('arrow teste 1')
})();


(() => console.log('arrow teste 2'))();