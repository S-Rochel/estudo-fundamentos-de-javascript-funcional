 // Função Callback : 
 // Exemplo leitura de um arquivo usando a função callback:


 const fs = require('fs')      // biblioteca 'file system' do node para ler o arquivo
 const path = require('path')  // biblioteca 'path' do node para pegar o caminho do arquivo


const caminho = path.join(__dirname, 'dados.txt') // concatena o caminho com o nome do arquivo

console.log(caminho) // para veriificar o caminho

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

// retorna de forma assíncrona, ou seja não espera a resposta e segue com o código, quando termina de ler o arquivo chama a função de volta (callback)
console.log('Início...')
fs.readFile(caminho, {}, exibirConteudo) // primeiro parâmetro = caminho, segundo parâmetro = options, terceiro parâmetro = a função de callback
console.log('Fim...') 


// retorna de forma sincrona, ou seja espera a resposta chegar para continuar a ler o código.
console.log('Início Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')