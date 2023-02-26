const lista = document.querySelector('[data-lista]')

export function imprimeCotacao(nome, valor) {
  lista.innerHTML = ''

  for (let mutiplicadosPor10 = 1; mutiplicadosPor10 <= 1000; mutiplicadosPor10 *= 10) {
    const listaItem = document.createElement('li')
    listaItem.innerHTML = `U$ ${mutiplicadosPor10} ${mutiplicadosPor10 === 1 ? nome : nome + `es`  }: R$ ${(valor * mutiplicadosPor10).toFixed(2)}`
    lista.appendChild(listaItem)
  }

}