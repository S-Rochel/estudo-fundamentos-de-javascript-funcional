// Classificar matrizes de Objetos:
{
    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
      ];
      // para classificar uma matriz de objetos podemos escrever uma função e comparação para comparar os valores das propriedades.
      const res = cars.sort(function(a, b){return a.year - b.year});
      console.log("Ordem Crescente", res)
} // Classifica em ordem crescente utilizando a propriedade year

{
    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
      ];
      // para classificar uma matriz de objetos podemos escrever uma função e comparação para comparar os valores das propriedades.
      const res = cars.sort(function(a, b){return b.year - a.year});
      console.log("Ordem Decrescente", res)
} // Classifica em ordem decrescente utilizando a propriedade year


