// this - Esta palavra-chave JavaScript refere-se ao objeto ao qual ela pertence.

// Em um método de objeto, this refere-se ao " dono " do método.
// Exemplo:
{
    const pessoa = {
        nome : "John",
        sobrenome : "Doe",
        idade : 45,
        nomeCompleto: function(){
            return this.nome + " " + this.sobrenome
        }
    }
    console.log(pessoa.nomeCompleto())
} // neste caso o objeto "pessoa" e dono do método "nomeCompleto", sendo assim, "this" refere-se ao objeto "pessoa".


// Em uma função, this refere-se ao objeto Global [object Window].
//Exemplo:
{
    function fn(){
        return console.log(this.toString())
    }
    fn()
}


// Em manipuladores de eventos HTML, this refere-se ao elemento HTML que recebeu o evento.
// Exemplo:
/*{
    <button onclick="this.style.display='none'">
         Clique para remover-me!
    </button>
}*/


// call() - Este método JavaScript chama um método de objeto passando outro objeto como argumento.
// Exemplo:
{
    const nomePessoa = {
        nomeCompleto: function(){
            return console.log(this.nome + " " + this.sobrenome)
        }
    }
    const dadosPessoa = {
        nome: "John",
        sobrenome: "Doe"
    }
    nomePessoa.nomeCompleto.call(dadosPessoa)
} // Neste exemplo, ao chamar nomePessoa com dadosPessoa como argumento, this fará referência a dadosPessoa, mesmo que seja um método de nomePessoa.



// 