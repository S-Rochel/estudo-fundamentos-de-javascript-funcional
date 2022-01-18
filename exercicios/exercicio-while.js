// while - Este loop percorre um bloco de código enquanto uma condição especificada for verdadeira.
/*
    while (enquanto condição for verdadeira){
        bloco de códigos
    }
*/
{
    let i = 0
    while ( i < 5){
        console.log(`Este é o ${i + 1}º laço e a condição é true`)
        i++
    }
    console.log('Aqui já saiu do laço while')
}
{
    const letras = ['A', 'B', 'C', 'D']
    let i = 0
    while (letras[i]){
        console.log(letras[i])
        i++
    }
}



// do while - Este loop é uma variante do loop while. Este loop executará o bloco de código uma vez, antes de verificar se a condição é verdadeira, então repetirá o loop enquanto a condição for verdadeira.
/*
    do {
        broco de códigos
    } while(enquanto condição for verdadeira)
*/
{
    let i = 0
    do {
        console.log(`Este é o ${i + 1}º laço e a condição é true`)
        i++    
    } while (i < 5)
    console.log('Aqui já saiu do laço do/while')
}
