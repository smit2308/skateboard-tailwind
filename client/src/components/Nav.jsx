import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger, cart} from '../assets/icons'
import { navLinks } from '../constants'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { Link } from 'react-router-dom'

import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react'



const Nav = () => {


const navigate = useNavigate();


const [isMenuOpen, setIsMenuOpen] = useState(false);


const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};


  return (
    <header className='absolute padding-x py-8 z-30 w-full xl:px-24 '>
      <nav className='lg:grid items-center  max-container lg:grid-cols-3 lg:justify-center flex  justify-between'>
        <a href='/'>
          <img 
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
            />
        </a>
        
       <div>
       <ul className='flex-1 flex justify-center items-center xl:gap-14 gap-6 max-lg:hidden '>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <Link to={item.path}
                
                className='font-monsterrat leading-normal text-xl  text-gray-900 hover:text-rose-600  '
                >
                  {item.label}
                </Link>
            </li>
          )
          )}
        </ul>

        
       </div>

       {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-white lg:hidden rounded-2xl  shadow-nav -mt-1 pb-10 '>
            <ul className='flex flex-col items-center gap-2'>
              {navLinks.map((item) => (
                <li key={item.label} className='w-full text-center '>
                  <Link
                    to={item.path}
                    className=' font-monsterrat leading-normal text-xl  text-gray-900 hover:text-rose-600 my-2'
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="max-lg:hidden max-lg:invisible flex flex-row xl:gap-6 gap-4  place-self-end">
          <Link to='/sign-in'>
        <Button 
       
          label="Sign In" 
          iconURL= {null}
            
            />   

          </Link>

          <Link to='/cart' >
            <Button 
              label="Cart" 
              iconURL= {cart}
              bgColor={'bg-white'}
              width={'w-full'}
              // iconWidth={28}
              // iconHeight={28}
              />
          </Link>
       
         </div>           
                
      
        <div className='lg:hidden place-self-end'>
          <button>          
            <img
             onClick={toggleMenu}
            src={hamburger}
            alt='"Hamburger'
            width={25}
            height={25} />
          </button>

        </div>

                  {/* Collapsible Mobile Links */}


      </nav>


    </header>
  )
}

export default Nav