// JSON é um formato para armazenar e transportar dados.
// JSON é frequentemente usado quando os dados são enviados de um servidor para uma página da web.
/*
   Regras de Sintaxe JSON:
   - Os dados devem estar em pares chave/valor;
   - As chaves seguram o objeto;
   - Os objetos devem estar separados por vírgula;
   - Os colchetes mantêm a matriz;
   - Chaves e valores das chaves exigem aspas duplas.
*/


// Objetos JSON são escritos dentro de chaves.
/* {"firstName":"John", "lastName":"Doe"} */


// As matrizes JSON são escritas entre colchetes.
/* 
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
*/ // aqui temos um array com três objetos.




// Exercício: Crie um arquivo JSON que defina um objeto de funcionários: uma matriz com 3 registros de funcionários (objetos).
let text = '{ "employees" : [' 
+ '{ "firstName":"John" , "lastName":"Doe" },' 
+ '{ "firstName":"Anna" , "lastName":"Smith" },' 
+ '{ "firstName":"Peter" , "lastName":"Jones" } ]}'


// Convertendo um arqivo JSON em um objeto JavaScript, para isto uamos a função JavaScript "JSON.parse()":
    const obj = JSON.parse(text)
    console.log(`Nome: ${obj.employees[1].firstName}`)




// Exercício:
let texto = '{"nomes": ['
                +'{"nome": "Rita"},'
                +'{"nome": "Sandro"},'
                +'{"nome": "Pedro"}'
                +']}'

const resultado = JSON.parse(texto)
console.log(resultado.nomes[1].nome)