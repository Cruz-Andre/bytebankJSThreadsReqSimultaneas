async function conectaAPI() {
  const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
  const conectaResposta = await conecta.json()
  console.log(conectaResposta)
  postMessage(conectaResposta.USDBRL)
}

addEventListener('message', () => {
  conectaAPI()
  setInterval(() => conectaAPI(), 30000)
})