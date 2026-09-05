let quantMinerios = 5
let tipoMinerio = "Ouro"

let pontuacaoTotal = 0

for (let pontuacao=1; pontuacao <= quantMinerios; pontuacao++){
    if (tipoMinerio == "Ferro"){
        pontuacaoTotal =  pontuacaoTotal + 5
    }
    else if (tipoMinerio == "Ouro"){
        pontuacaoTotal = pontuacaoTotal + 10
    }
    else if (tipoMinerio == "Diamante"){
        pontuacaoTotal = pontuacaoTotal + 20
    }
    else if (tipoMinerio == "Esmeralda"){
        pontuacaoTotal = pontuacaoTotal + 30
    }
}
console.log(`O jogador coletou ${quantMinerios} de ${tipoMinerio}. Pontuação total: ${pontuacaoTotal}`)