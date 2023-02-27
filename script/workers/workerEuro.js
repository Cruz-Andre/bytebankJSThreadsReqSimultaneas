addEventListener('message', () => {
  conectaAPI()
  setInterval(() => conectaAPI(), 300000)
})

async function conectaAPI() {
  const conecta = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
  const conectaResposta = await conecta.json()
  console.log(conectaResposta)
  postMessage(conectaResposta.EURBRL)
}
