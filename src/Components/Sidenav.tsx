import React from 'react'
import fintech from '../assets/fintech.svg'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configuracoes from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'
import FintechSVG from '../assets/FintechSVG'


const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3 '>
      <FintechSVG title='Fintech logo' />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <a href="">Resumo</a>
        </li>

        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>

        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="">Webhooks</a>
        </li>
        
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="">Configurações</a>
        </li>
        
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="">Contato</a>
        </li>
        
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav