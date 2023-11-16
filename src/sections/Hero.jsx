import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import {statistics} from '../constants'
import HeaderImage from '../assets/images/header_img.png' 

const Hero = () => {
  return (
    <section
      id='home'
      className= ' w-full flex xl:flex-row xl:px-28 flex-col justify-center align-center min-h-screen  max-container  '
      >
        <div className='relative xl:w-3/5 flex flex-col justify-center items-start max-sm:items-center w-full  max-xl:padding-x pt-28 z-10 '>
          <p className='text-x font-montserrat  text-gray-700'>Summer Collection</p>
          <h1 className='mt-2 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold max-sm:text-center'>
            <span  className=' xl:whitespace-nowrap  pr-10'>The New Arrival</span>
            <br/>
            <span className='inline-block mt-3 bg-gradient-to-r from-pink-700 via-yellow-300 to-teal-400 text-transparent bg-clip-text'>Zumiez</span> Boards
          </h1>
          <p className=' leading-8 font-montserrat text-xl text-gray-500 mt-4 mb-10 sm:max-w-sm max-sm:text-center'>Discover the new RGB Halo Edition Boards by DGK</p>

          <Button
            label="Shop  Now"
            iconURL= {arrowRight}/>

          <div className='flex justify-start items-start max-sm:justify-center flex-wrap w-full mt-20 mb-10 gap-16'>
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className='font-montserrat font-bold text-xl  text-gray-700'>{statistic.value}</p>
                <p className='font-montserrat  text-x text-gray-500'>{statistic.label}</p>
              </div>
            ))}</div>
        </div>


        <div className='relative flex-1 flex  justify-center z-10 items-center max-xl:hidden   bg-center'>
        <img  src={HeaderImage} 
          alt='Board Collection'

          className='w-[160px] object-contain relative rotate-45 '/>
        </div>

        
      </section>
  )
}

export default Hero