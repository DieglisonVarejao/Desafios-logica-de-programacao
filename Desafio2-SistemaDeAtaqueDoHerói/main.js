class Heroi{
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    atacar(){
        let ataque
        
        if (this.tipo == "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo == "mago"){
            ataque = "magia"
        }
        else if (this.tipo == "arqueiro"){
            ataque = "arco"
        }
        else if (this.tipo == "ninja"){
            ataque = "shuriken"
        }
        else if (this.tipo == "assassino"){
            ataque = "adaga"
        }
        else if (this.tipo == "tank"){
            ataque = "escudo"
        }else{
            console.log("ESSE TIPO DE HERÓI NÃO EXISTE!!!")
            return
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

let heroi1 = new Heroi("Naruto", 20000, "suporte")
heroi1.atacar()