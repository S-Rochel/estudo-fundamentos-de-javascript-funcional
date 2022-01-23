// Acessadores de Objeto JavaScript - Getters e Setters.
/* 
Por que usar getters e setters?
Dá uma sintaxe mais simples
Permite sintaxe igual para propriedades e métodos
Pode garantir uma melhor qualidade de dados
É útil para fazer coisas nos bastidores
*/

// Getter - retorna o valor como uma propriedade e não como uma função.
// Exemplo:
{
    const pessoa = {
        nome: "John Doe",
        idade: 50,
        olhos: "Azul",
        get corOlhos() {
            return this.olhos
        }
    }
    console.log(pessoa.corOlhos)    
}


// Setters - atribuí (seta) um valor.
// Exemplo:
{
    const pessoa = {
        nome: "John Doe",
        idade: 50,
        olhos: "",
        set corOlhos(cor) {
            this.olhos = cor
        }
    }
    pessoa.corOlhos = "Azul"
    console.log(pessoa.olhos)    
}


// Object.defineProperty() - Este método também pode ser usado para adicionar Getters e Setters: 
// Exemplo:
{
    const meuOnjeto = {counter : 0} // define um objeto

    Object.defineProperty(meuOnjeto, "reset", { get : function () {this.counter = 0}
    }); // define setters
    Object.defineProperty(meuOnjeto, "incremento", {get : function () {this.counter++}
    });
    Object.defineProperty(meuOnjeto, "decremento", {get : function () {this.counter--;}
    });
    Object.defineProperty(meuOnjeto, "add", {set : function (value) {this.counter += value;}
    });
    Object.defineProperty(meuOnjeto, "subtrair", {set : function (value) {this.counter -= value;}
      });

      meuOnjeto.reset;
      meuOnjeto.add = 5;
      meuOnjeto.subtrair = 1;
      meuOnjeto.incremento;
      meuOnjeto.decremento;
      console.log(meuOnjeto.counter)
}