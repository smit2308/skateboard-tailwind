import React from 'react'
import {headerLogo} from '../assets/images'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section id='contact-us'
      className='flex flex-col gap-20 items-center'>
      <div className='flex flex-col items-center '>
        <img className='bg-white' 
          src={headerLogo}
          width={300}></img>

        <p className='text-white text-center'>
          © 2021 All Rights Reserved. Privacy Policy
        </p>

        <p className='text-gray-200 font-palanquin text-center text-xl mt-6 max-w-lg leading-8'>
           Get your skateboards at the nearest store and get Rewards on every purchase
        </p>

        <div className='flex flex-row gap-4 mt-8'>
            { socialMedia.map((social) => (
              <img  className='bg-white rounded-full p-2 hover:scale-105 transition-all ease-in-out'
              src={social.src}
              alt={social.alt}
                width={48}>
              </img>  
            ))}
        </div>
        
      </div>

      <div className='flex flex-1 justify-evenly gap-20 mt-8 flex-wrap '>
        { footerLinks.map((footer) => (
          <div className='flex flex-col '>
            <h4 className='text-white font-palanquin font-semibold text-[40px] mb-10 text-center'>{footer.title}</h4>
            {footer.links.map((fl) => (
              <a href={fl.link} className='text-gray-200 font-palanquin text-lg leading-10 text-center'>{fl.name}</a>
            ))}
          </div>
        )
        )}
        </div>

    </section>
  )
}

export default Footer