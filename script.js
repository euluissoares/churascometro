
let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando...");


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
 

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    let mediaPrecoCarne = Math.ceil(qtdTotalCarne / 1000 * 25)
    let mediaPrecoCerveja = Math.ceil(qtdTotalCerveja / 355 * 5)
    let mediaprecoBebidas = Math.ceil(qtdTotalBebidas / 2000 * 8)

    let precoCarnePP = mediaPrecoCarne / (adultos + criancas) ;
    let precoBebidasC = mediaprecoBebidas / criancas;
    let precoCervejaPP = mediaPrecoCerveja / adultos;

    let totalPC = precoCarnePP + precoBebidasC;
    let totalPP = precoCarnePP + precoCervejaPP;
    let mediaPreco = mediaPrecoCarne + mediaPrecoCerveja + mediaprecoBebidas

    resultado.innerHTML =  `<p> <img src="/imagens/carne.png" alt="carne"> ${qtdTotalCarne / 1000} kg de carne. </P>`
    resultado.innerHTML += `<p> <img src="/imagens/cerveja.png" alt="cerveja"> ${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja. </p>`
    resultado.innerHTML += `<p> <img src="/imagens/bebidas.png" alt="bebidas"> ${Math.ceil(qtdTotalBebidas / 2000)} pet's 2l de bebidas. </P>`

    resultado.innerHTML += `<P> Media de gasto  R$ ${Math.ceil(totalPC)},OO por criança.`
    resultado.innerHTML += `<P> Media de gasto  R$ ${Math.ceil(totalPP)},OO por adulto.`
    resultado.innerHTML +=  `<p id="mediapreco"> MEDIA DE TOTAL DE GASTO R$ ${mediaPreco},00 .</P>`
    
}


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
