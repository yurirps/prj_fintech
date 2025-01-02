import React from 'react'
import { useData } from '../Context/DataContext'

const Resumo = () => {
  const { data } = useData()
  console.log('resumo aqui', data)
  if (data === null) return null
  return (
    <section>
      <div className='resumo flex mb'>
        <div className='box'>
          <h2>Total de Vendas</h2>
          <span>
            {data.filter((i) => i.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className='box'>
          <h2>Recebido</h2>
          <span>
            {data.filter((i) => i.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className='box'>
          <h2>Processando</h2>
          <span>
            {data.filter((i) => i.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className='box mb'>
              graficos
      </div>
    </section>
  )
}

export default Resumo