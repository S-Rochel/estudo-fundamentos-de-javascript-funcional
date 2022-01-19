// Expressões Regulares - Uma expressão regular é uma sequência de caracteres que forma um padrão de pesquisa. O padrão de pesquisa pode ser usado para operações de pesquisa e substituição de texto.

// "/padrão que deverá ser procurado/modificador, regulamento para a busca".



// search() - Este método pesquisa uma string por um valor especificado e retorna a posição da correspondência. Podemos usar o método search() como uma expressão regular:
{
    let texto = "O rato roeu a roupa do Rei de Roma"
    let res = texto.search(/do Rei/i)
    console.log(res)
} // achou o resultado apartir do indíce 20, sem distinção entre maiúsculas e minúsculas.



// replace() - Este método substitui um valor especificado por outro valor em uma string:
{
    let texto = "O rato roeu a roupa do Rei de Roma"
    let res = texto.replace(/do Rei/i, "da Rainha")
    console.log(res)
}
 



// Modificadores:
//    Modificador           Descrição
//         i                Não diferenciar maiúscula de minúscula.
// ex:
{
    let texto = "O rato roeu a roupa do Rei de Roma"
    let res = texto.search(/Rei/i)
    console.log(res)
}

//    Modificador           Descrição
//         g                encontre todas as correspondências em vez de parar após a primeira correspondência.
{
    let texto = "O rato roeu a roupa do Rei de Roma"
    let res = texto.match(/r/g)
    console.log(res)
}

//    Modificador           Descrição
//         m                Executar correspondência de várias linhas.
{
    let texto = "O rato roeu a roupa do Rei de Roma"
    let res = texto.match(/roupa/m)
    console.log(res)
}



// Padrões:
// Expressão                Descrição
//   [abc]                  Encontre qualquer um dos caracteres entre os colchetes.
//   [0-9]                  Encontre qualquer um dos dígitos entre os colchetes.
//   (x|y)                  Encontre qualquer uma das alternativas separadas por |.


// Metacaracteres:
// Metacaracter             Descrição
//      \d                  Encontrar um dígito.
//      \s                  Encontre um caractere de espaço em branco.
//      \b                  Encontre uma correspondência no início de uma palavra como esta: \bWORD ou no final de uma palavra como esta: WORD\b.
//    \uxxxx                Encontre o caractere Unicode especificado pelo número hexadecimal xxxx.



// Quantificadores:
// Quantificador            Descrição
//      n+                  Corresponde a qualquer string que contenha pelo menos um n.
//      n*                  Corresponde a qualquer string que contenha zero ou mais ocorrências de n.
//      n?                  Corresponde a qualquer string que contenha zero ou uma ocorrência de n.





// continuar apartir de: Usando o objeto RegExp