import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full xl:px-24'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img 
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
            />
        </a>
        
        <ul className='flex-1 flex justify-center items-center gap-16 max-xl:hidden'>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a 
                href={item.href}
                className='fonts-monsterrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </a>
            </li>
          )
          )}
        </ul>
        <div className="max-xl:hidden">
        <Button 
          label="Log In / Sign Up" 
          iconURL= {arrowRight}/>   
         </div>           
                
      
        <div className='hidden max-xl:block'>
          <img
            src={hamburger}
            alt='"Hamburger'
            width={25}
            height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav