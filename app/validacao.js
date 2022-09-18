function verificaChute(chute) {
    const numero = +chute
    const frase = chute

    if (frase === "game over") {
        document.body.style.backgroundColor = "#2D132C";
        document.body.style.color = "#C72C41";
        document.body.innerHTML = `
        <h2>Game Over!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="reload" class="btn-reload">Jogar Novamente</button>
        `
    }

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += `<div>Não entendi!:/</div>
        <div>O seu chute precisa ser um número.</div>`
        return
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<div>Valor inválido!</div> 
        <div>O seu chute precisa estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="reload" class="btn-reload">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-turn-up"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-turn-down"></i></div>`
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'reload') {
        window.location.reload()
    }
})
