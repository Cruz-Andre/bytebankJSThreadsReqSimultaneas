const graficoDolar = document.getElementById('graficoDolar')
console.log(graficoDolar)

const graficoParaDolar = new Chart(graficoDolar, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  }
});

setInterval(() => conectaAPI(), 60000)

async function conectaAPI() {
  const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
  const conectaResposta = await conecta.json()
  console.log(conectaResposta)
}

function geraHorario() {
  let data = new Date()
  let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
  console.log(horario);
  return horario
}

geraHorario()