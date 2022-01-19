// break - Esta instrução sai de um loop.
{
    for (let i = 0; i < 10; i++){
        if (i === 4){
            break
        } else {
            console.log('Laço: ', i + 1)
        }
    }
}



console.log("x=======x======x")
// continue - Esta instrução "salta" uma iteração no loop.
{
    for (let i = 0; i < 5; i++){
        if (i === 3 - 1){
            continue
        } else {
            console.log('Laço: ', i + 1)
        }
    }
}

