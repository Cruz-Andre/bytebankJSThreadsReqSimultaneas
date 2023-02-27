const lista = document.querySelectorAll('[data-lista]')

export function selecionaCotacao(nome, valor) {
  lista.forEach(listaEscolhida => {
    if (listaEscolhida.id == nome) {
      imprimeCotacao(listaEscolhida, nome, valor)
    }
  })
}

function imprimeCotacao(lista, nome, valor) {

  lista.innerHTML = ''

  const plurais = {
    'dolar': 'dolares',
    'euro': 'euros'
  }

  for (let mutiplicadosPor10 = 1; mutiplicadosPor10 <= 1000; mutiplicadosPor10 *= 10) {
    const listaItem = document.createElement('li')
    listaItem.innerHTML = `
      ${lista.id == 'euro'? '€$' : 'U$' } 
      ${mutiplicadosPor10} 
      ${mutiplicadosPor10 === 1 ? nome : plurais[nome]}: R$ ${(valor * mutiplicadosPor10).toFixed(2)}`
    lista.appendChild(listaItem)
  }

}