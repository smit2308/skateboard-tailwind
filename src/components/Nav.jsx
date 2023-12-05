import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { Link } from 'react-router-dom'

import {Routes, Route, useNavigate} from 'react-router-dom';



const Nav = () => {


const navigate = useNavigate();

const navigateTo= (page) => {
  // 👇️ navigate to /contacts
  navigate(page);
};


  return (
    <header className='absolute padding-x py-8 z-10 w-full xl:px-24'>
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
              <Link to={item.path}
                
                className='fonts-monsterrat leading-normal text-xl font-semibold text-gray-900 hover:text-rose-600 hover:font-semibold'
                >
                  {item.label}
                </Link>
            </li>
          )
          )}
        </ul>
        <div className="max-xl:hidden">
          <Link to='/sign-up'>
        <Button 
       
          label="Log In / Sign Up" 
          iconURL= {null}
            directTo={'/sign-up'}
            />   

          </Link>
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