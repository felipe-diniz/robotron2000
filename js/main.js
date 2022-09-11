const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const maxPecas = document.querySelector("[data-pecamax]")
const roboAtual = document.getElementById("robocor")
const opcaoCor = document.querySelectorAll("[data-cor]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        limitePecas(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca, maxPecas)
        minimoPecas(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca, maxPecas)
    })
})

opcaoCor.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        corEscolhida = e.target.dataset.cor;
        mudaCor(corEscolhida);
    })
})



function limitePecas(operacao, controle, peca, maxPecas) {
    const minPecas = controle.querySelector("[data-contador]")

    if (operacao === "+" && maxPecas.value > "0") {
        minPecas.value = parseInt(minPecas.value) + 1
        maxPecas.value = parseInt(maxPecas.value) - 1
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }
}

function minimoPecas(operacao, controle, peca, maxPecas) {
    const minPecas = controle.querySelector("[data-contador]")

    if (operacao === "-" && minPecas.value > "0") {
        minPecas.value = parseInt(minPecas.value) - 1
        maxPecas.value = parseInt(maxPecas.value) + 1
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    }
}

function mudaCor(cor) {
    roboAtual.src = `img/robotron 2000 - ${cor}.png`
}
