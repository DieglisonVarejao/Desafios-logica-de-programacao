let nomePersonagem = "Gargamel"
let quantidadeMana = 0
let tipoPersonagem = "Mago"

let categoria

if(quantidadeMana > 0){
    
    if (quantidadeMana <= 100){
    categoria = "Aprendiz"
    }
    else if(quantidadeMana >= 101 && quantidadeMana <= 500){
        categoria = "Mago"
    }
    else if(quantidadeMana >= 501 && quantidadeMana <= 1000){
        categoria = "Mago Supremo"
    }
    else{
        categoria = "Arquimago"
    }
    console.log(`O personagem ${nomePersonagem} é um ${categoria}` )

}else{
    console.log("Mana inválida!")
    }