let quantMinerios = 5
let tipoMinerio = ["Ferro", "Ouro", "Diamante", "Esmeralda"]
let indice
let total = 0

for (let contador=1; contador<=quantMinerios; contador++){
    indice = (contador - 1) % tipoMinerio.length
    if (tipoMinerio[indice] == "Ferro"){
        total = total + 5
    }
    else if (tipoMinerio[indice] == "Ouro"){
        total = total + 10
    }
    else if (tipoMinerio[indice] == "Diamante"){
        total = total + 20
    }
    else if (tipoMinerio[indice] == "Esmeralda"){
        total = total + 30
    }
    console.log(`${indice}: ${tipoMinerio[indice]} + ${total}`)
}

console.log(`\nTotal coletado: ${total}`)