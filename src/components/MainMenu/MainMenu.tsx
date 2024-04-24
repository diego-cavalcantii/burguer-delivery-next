import React from 'react'

const dados = [
    {text: "Home", link:"/Home"},
    {text: "Cardapio", link:"#"},
    {text: "Sobre", link:"#"},
    {text: "Contato", link:"#"}
]

export const MainMenu = () => {
  return (
    <div>
        <ul className='flex'>
            {dados.map(dado => <li>{dado.text}</li>)}
        </ul>
    </div>
  )
}
