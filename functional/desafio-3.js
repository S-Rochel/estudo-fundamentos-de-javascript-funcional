// Chamar várias Promises ao mesmo tempo e chamar o then quando todas as promises forem resolvidas.

// gerar número aleatório depois de um certo tempo:
function gerarNumerosEntre(min, max, tempo){
    if(min > max) [max, min] = [min, max]
    return new Promise (resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}
function gerarVariosNumeros (){
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1000),
    ])
} // vai executar todas as chamadas em paralelo e após todas elas resolvidas e que vai chamar o then.

gerarVariosNumeros().then(numeros => console.log(numeros))