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
{
    let texto = "O rato roeu a roupa do Rei de Roma"
    let res = texto.match(/[re]/g)
    console.log(res)
}

// Expressão                Descrição
//   [0-9]                  Encontre qualquer um dos dígitos entre os colchetes.
{
    let texto = "O rato roeu 10 vezez a roupa do Rei de Roma"
    let res = texto.match(/[10]/g)
    console.log(res)
}

// Expressão                Descrição
//   (x|y)                  Encontre qualquer uma das alternativas separadas por |.
{
    let texto = "O rato roeu 10 vezez a roupa do Rei de Roma"
    let res = texto.match(/(rato | roupa)/g)
    console.log(res)
}




// Metacaracteres:
// Metacaracter             Descrição
//      \d                  Encontrar um dígito.
{
    let texto = "O rato roeu 10 vezez a roupa do Rei de Roma"
    let res = texto.match(/\d/g)
    console.log(res)
}

// Metacaracter             Descrição
//      \s                  Encontre um caractere de espaço em branco.
{
    let texto = "O rato roeu 10 vezes a roupa do Rei de Roma"
    let res = texto.match(/\s/g)
    console.log(res)
}

// Metacaracter             Descrição
//      \b                  Encontre uma correspondência no início de uma palavra como esta: \bWORD ou no final de uma palavra como esta: WORD\b.
{
    let texto = "O rato roeu 10 vezes a roupa do Rei de Roma"
    let res = texto.match(/\bvezes\b/g)
    console.log(res)
}


// Metacaracter             Descrição
//    \uxxxx                Encontre o caractere Unicode especificado pelo número hexadecimal xxxx.
{
    let texto = "O rato roeu 10 vezes a roupa do Rei de Roma #"
    let res = texto.match(/\u0023/g)
    console.log(res)
} 




// Quantificadores:
// Quantificador            Descrição
//      n+                  Corresponde a qualquer string que contenha pelo menos um n.
{
    let texto = "O rato roeu 10 vezes a roupa do Rei de Roma"
    let res = texto.match(/u+/g)
    console.log(res)
}

// Quantificador            Descrição
//      n*                  Corresponde a qualquer string que contenha zero ou mais ocorrências de n.
{
    let texto = "O rato roeu 10 vezes a roupa do Rei de Roma"
    let res = texto.match(/u*/g)
    console.log(res)
}

// Quantificador            Descrição
//      n?                  Corresponde a qualquer string que contenha zero ou uma ocorrência de n.
{
    let texto = "O rato roeu 10 vezes a roupa do Rei de Roma"
    let res = texto.match(/u?/g)
    console.log(res)
}




// Usando o objeto RegExp - Em JavaScript, o objeto RegExp é um objeto de expressão regular com propriedades e métodos predefinidos.
// test() - Este método procura um padrão em uma string e retorna verdadeiro ou falso, dependendo do resultado.
{
    const procuraPor = /p/
    let res = procuraPor.test("O rato roeu 10 vezes a roupa do Rei de Roma")
    console.log(res)
}
{
    let res = /p/.test("O rato roeu 10 vezes a roupa do Rei de Roma")
    console.log(res)
}

{
    const pass1 = 'senhafraca';
    const pass2 = '$3nh@f0rt3';

    const regex = /\W|_/;

    console.log(regex.test(pass1));
    console.log(regex.test(pass2));
} /*
 verifica a existência de um caracter especial, \W seleciona todos que não forem alfanuméricos, isto é, selecionará todos os caracteres exceto letras (A-Z), números (0-9) e underline (_).
 No padrão /\W|_/, temos:
\W, que procura por caracteres não alfanuméricos;
|, que é o mesmo que um "ou", nas expressões regulares.
_, que procure todos os caracteres _, já que \W não seleciona caracteres underline.
*/


// exec() - Este método procura uma string por um padrão especificado e retorna o texto encontrado como um objeto.
{
    const procuraPor = /p/
    let res = procuraPor.exec("O rato roeu 10 vezes a roupa do Rei de Roma")
    console.log(res)
}
{
    let res = /p/.exec("O rato roeu 10 vezes a roupa do Rei de Roma")
    console.log(res)
}