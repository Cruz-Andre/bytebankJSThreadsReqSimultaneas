import { imprimeCotacao } from "./imprimeCotacao.js";

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

setInterval(() => conectaAPI(), 60000)

async function conectaAPI() {
  const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
  const conectaResposta = await conecta.json()
  console.log(conectaResposta)
  let tempo = geraHorario()
  let valor = conectaResposta.USDBRL.ask
  adicionarDados(graficoParaDolar, tempo, valor)
  imprimeCotacao('Dolar', valor)
}

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

