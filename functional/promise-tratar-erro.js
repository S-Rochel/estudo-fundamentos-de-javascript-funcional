// Tratamento de Erros 1: (usando o reject)
// desta maneira passo para a função um valor que será comparado com um valor aleatório, e se o valor aleatório for menor que o valor passado será chamado a função reject (reject devolve uma resposta que ocorreu um erro), caso contrário será chamado a função resolve (resolve é chamado quando tudo está OK, neste caso devolve o valor recebido na função 'funcionarOuNao()')
function funcionarOuNao1(valor, chanceErro){
    return new Promise((resolve, reject)=> {
        if (Math.random() < chanceErro){
            reject('Ocorreu um erro no 1º exemplo!')
        }else{
            resolve(valor)
        }
    })
}
funcionarOuNao1('Testando o valor 1...', 0.5)
    .then(valor=> console.log(valor))



// Tratamento de Erros 2: (Usando o catch, forma mais comum de tratar um erro)
// 
function funcionarOuNao2(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro){
            reject('Ocorreu um erro no 2º exemplo!')
        }else{
            resolve(valor)
        }
    })
}
funcionarOuNao2('Testando o valor 2...', 0.5)
    .then(valor => console.log(valor))    
    .catch(err => console.log(`Erro: ${err}`))