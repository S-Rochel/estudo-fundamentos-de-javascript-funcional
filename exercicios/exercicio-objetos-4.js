// Construtores de Obbjeto JavaScript - Uma função construtora de objeto permite construir objetos de mesmo tipo. É considerado uma boa prática nomear funções de construtor com uma primeira letra maiúscula.
// Exemplo de função construtora:
function Pessoa(nome, sobrenome, olhos, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.olhos = olhos;
    this.idade = idade;
    this.texto = function() {
        return "Olá"
    };
    
}
// para construir um objeto de certo tipo usamos a palavra-chave new, exemplo: new NomeDaFunçãoConstrutora ().
// Exemplo de como construir (instância) um objeto usando uma função construtora:
const meuPai = new Pessoa("John", "Doe", "azul", 50);
const minhaMae = new Pessoa("Sally", "Rally", "verde", 48);
console.log(`Minha mãe: ${minhaMae.nome}`);
console.log(`Meu pai: ${meuPai.nome}`);


// Adicionar uma propriedade a um objeto já instânciado.
// Exemplo:
meuPai.nacionalidade = "Brasileiro"
for (let p in meuPai){
    console.log(meuPai[p])
}


// Adicionar um método a um objeto já instânciado.
// Exemplo:
meuPai.nomeCompleto = function() {
    return this.nome + " " + this.sobrenome
}
console.log(meuPai.nomeCompleto())



// Adicionando um método à uma função construtora.
/* 
Você não pode adicionar um novo método a um construtor de objeto da mesma forma que adiciona um novo método a um objeto existente.

A adição de métodos a um construtor de objetos deve ser feita dentro da função construtora:
*/


// Usando this em função construtora.
/*
Em JavaScript, a coisa chamada thisé o objeto que "possui" o código.

O valor de this, quando usado em um objeto, é o próprio objeto.

Em uma função construtora this não tem valor. É um substituto para o novo objeto. O valor de thisse tornará o novo objeto quando um novo objeto for criado.
*/
/*
Como você pode ver acima, o JavaScript tem versões de objeto dos tipos de dados primitivos String, Numbere Boolean. Mas não há razão para criar objetos complexos. Os valores primitivos são muito mais rápidos:

Use literais de string ""em vez de new String().

Use literais numéricos 50 em vez de new Number().

Use literais booleanos true / false em vez de new Boolean().

Use literais de objeto {} em vez de new Object().

Use literais de matriz [] em vez de new Array().

Use literais padrão /()/ em vez de new RegExp().

Use expressões de função () {} em vez de new Function().
*/
