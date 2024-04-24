import React from 'react'
import './Header.css'
import Image from 'next/image'
import bg from '../../../public/hamburger-color.png'
import { MainMenu } from '../MainMenu/MainMenu'

export const Header = () => {
  return (
    <div className=' w-9/12 py-4 mx-auto flex justify-center items-center gap-y-1.5 '> 
      <div className='flex items-center gap-y-1.5'>
        <Image
      src={bg}
      width={50}
      height={50}
      alt="Logo BurguerDelivery"
    />
    <h1>Burguer Delivery</h1>
      </div>
      <MainMenu/>
    </div>
  )
}
