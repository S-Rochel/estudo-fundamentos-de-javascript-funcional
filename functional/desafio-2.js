// Encapsular em uma Promise uma chamada para o arquivo dados.txt
// importar as bicliotecas:


const fs = require('fs')
const path = require('path')


const caminho = path.join(__dirname, 'dados.txt') // pegar o caminho para o arquivo dados.txt


// minha resposta:
function exibirConteudo(__, conteudo){
    console.log(conteudo.toString())
}

function lerDados(caminho, fn){    
    return new Promise(resolve=> {
        fs.readFile(caminho, exibirConteudo)      
    })
}

lerDados(caminho, exibirConteudo)
    .then(dados=>dados)
    .then(console.log)


// Resposta do professor:
function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(__, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
} // assim encapslou a chamada do readFile dentro de uma Promise,
  // primeiro imprime console.log('Depois de ler'), pois não vai ficar esperando a execução do resolve
  // quando ele ler o arquivo e que ele vai executar a função: function(__, conteudo){  resolve(conteudo.toString())}, passando o conteudo chamando o resolve que vai tranformar o conteudo em toString

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))