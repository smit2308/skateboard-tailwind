import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Signup_img from '../assets/images/banner/Signup_img.jpg'


export const AuthLayout = () => {
  const isAuth = false;



  return (
      <section className='flex  justify-center items-center h-screen  '>
        {isAuth ? (<Navigate to="/" /> 
        ):( 
          <>
            <section className='  object-cover flex flex-1 flex-col justify-center items-center pt-20 '>
              <Outlet />
            </section>

            <div className='w-1/2 max-lg:hidden object-cover items h-screen overflow-hidden flex flex-col  '>
              <img
                src={Signup_img} 
                alt='logo'            
                className=' object-cover  w-screen    transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0'> 
              </img>

              <h3 className="absolute bottom-0 right-0 text-[7vw] leading-0 text-left font-mono font-bold text-gray-900 bg-white drop-shadow-3xl  ">Live To Skate</h3>
            </div>

          </>)}
      </section>
  )
}
