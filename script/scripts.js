import { selecionaCotacao } from "./imprimeCotacao.js";


const graficoDolar = document.getElementById('graficoDolar')
console.log(graficoDolar)

const graficoParaDolar = new Chart(graficoDolar, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Dolar U$',
      data: [],
      borderWidth: 1
    }]
  }
});

function geraHorario() {
  let data = new Date()
  let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
  console.log(horario);
  return horario
}

function adicionarDados(grafico, legenda, dados) {
  grafico.data.labels.push(legenda)
  grafico.data.datasets.forEach(dataset => {
    dataset.data.push(dados)
  });

  grafico.update()
}

let workerDolar = new Worker('./script/workers/workerDolar.js')
workerDolar.postMessage('usd')
workerDolar.addEventListener('message', evento => {
  let tempo = geraHorario()
  let valor = evento.data.ask
  adicionarDados(graficoParaDolar, tempo, valor)
  selecionaCotacao('dolar', valor)
})

// //Single Thread
//setInterval(() => conectaAPI(), 60000)
// async function conectaAPI() {
//   const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
//   const conectaResposta = await conecta.json()
//   console.log(conectaResposta)
//   let tempo = geraHorario()
//   let valor = conectaResposta.USDBRL.ask
//   adicionarDados(graficoParaDolar, tempo, valor)
//   imprimeCotacao('Dolar', valor)
// }

const graficoEuro = document.getElementById('graficoEuro')
console.log(graficoEuro)

const graficoParaEuro = new Chart(graficoEuro, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Euro €$',
      data: [],
      borderWidth: 1,
    }]
  }
});

console.log(graficoParaEuro.data);

let workerEuro = new Worker('./script/workers/workerEuro.js')
workerEuro.postMessage('eur')
workerEuro.addEventListener('message', evento => {
  let tempo = geraHorario()
  let valor = evento.data.ask
  adicionarDados(graficoParaEuro, tempo, valor)
  selecionaCotacao('euro', valor)})