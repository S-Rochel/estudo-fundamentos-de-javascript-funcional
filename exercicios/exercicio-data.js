// Trabalhando com datas e fuso horário

// new Date() - Este é um construtor que retorna a data e hora hora atual:
{
    let d = new Date()
    console.log(d)
}


// getTime() - Este método retorna o número de milissegundos desde 1º de janeiro de 1970:
{
    const d = new Date()    
    console.log(d.getTime())
}


// getFullYear() - Este método retorna o ano de uma data como um número de quatro dígitos:
{
    const d = new Date()    
    console.log(d.getFullYear())  
}


// .getMonth() - Este método retorna o mês de uma data como um número (0-11), sendo 0 = janeiro, 1 = fevereiro,...:
{
    const d = new Date()    
    console.log(d.getMonth())  
}


// .getDate() - Este método retorna o dia de uma data como um número (1-31):
{
    const d = new Date()    
    console.log(d.getDate())  
}


// getHours() - Este método retorna as horas de uma data como um número (0-23):
{
    const d = new Date()    
    console.log(d.getHours())  
}


// .getMinutes() - Este método retorna os minutos de uma data como um número (0-59):
{
    const d = new Date()    
    console.log(d.getMinutes())  
}


// .getSeconds() - Este método retorna os segundos de uma data como um número (0-59):
{
    const d = new Date()    
    console.log(d.getSeconds())  
}


// .getMilliseconds() - Este método retorna os milissegundos de uma data como um número (0-999):
{
    const d = new Date()    
    console.log(d.getMilliseconds())  
}


// .getDay() - Este método retorna o dia da semana de uma data como um número (0-6):
{
    const d = new Date()    
    console.log(d.getDay())  
}


// 