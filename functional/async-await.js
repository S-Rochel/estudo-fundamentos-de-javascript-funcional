 // Async/Await - Só pode ser usado await dentro de uma função assíncrona.

 function esperarTempo(tempo = 2000){
     return new Promise(function(resolve) {
         setTimeout(() => resolve(), tempo)
    })
 }

// Sem Async/Await:
 esperarTempo(2000)
    .then(esperarTempo)
    .then(()=>console.log('Executando Promise 1...'))
    .then(esperarTempo)
    .then(()=>console.log('Executando Promise 1...'))
    .then(esperarTempo)
    .then(()=>console.log('Executando Promise 1...'))




// Com Async/Await: (fica parecendo um códiigo síncrono, executa uma linha para depois ir para outra linha, ou seja faz o chamado da promise espera ser resolvido para depois ir para outra linha)

async function executar() {
    await esperarTempo(2000)
    console.log('Executando Promise 2...')
    await esperarTempo(2000)
    console.log('Executando Promise 2...')
    await esperarTempo(2000)
    console.log('Executando Promise 2...')
}
executar()


// Exemplo:
function retornarValor() {
    return new Promise(resolve => {
        setTimeout( ()=> resolve(10), 8000)
    })
}


async function executarValor(){
    let valor = await retornarValor()
    
    await esperarTempo(2000)
    console.log(`Demonstração do retorno do valor 10: ${valor}`)

    await esperarTempo(2000)
    console.log(`Demonstração do retorno do valor 10: ${valor + 1}`)

    await esperarTempo(2000)
    console.log(`Demonstração do retorno do valor 10: ${valor + 2}`)

    await esperarTempo(2000)
    console.log(`Demonstração do retorno do valor 10: ${valor + 3}`)
}
executarValor()