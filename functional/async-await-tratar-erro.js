// Async/Await tratamento de Erro sem try/catch
/*
function numerosLoteria1(min, max, numeroRepetido){
    if(min > max) [max, min] = [min, max]
    return new Promise( (resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numeroRepetido.includes(aleatorio)){
            reject('Número repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarSenna1(qtdeNumeros){
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
        numeros.push(await numerosLoteria(1, 60, numeros))
    }
    return numeros
}

gerarSenna1(6)
    .then(console.log)
    .catch(console.log)
*/


// Async/Await tratamento de Erro com try/catch
function numerosLoteria2(min, max, numeroRepetido){
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numeroRepetido.includes(aleatorio)){
            reject('Número repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarSena2(qtdeNumeros, tentativas = 1){
   try{
       const numeros = []
       for(let _ of Array(qtdeNumeros).fill()){
           numeros.push( await numerosLoteria2(1, 60, numeros))
       }
       return numeros
   } catch(e) {
       if(tentativas > 2){
           throw "Número de tentativas muito alto"
       }else{
           return gerarSena2(qtdeNumeros, tentativas + 1)
       }
   }
}

gerarSena2(20)
    .then(console.log)
    .catch(console.log)