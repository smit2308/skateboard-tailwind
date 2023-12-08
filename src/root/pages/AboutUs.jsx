import React from 'react'
import { about_us_skate, about_us_banner } from '../../assets/images'
import { CustomerReviews } from '../../sections'
import { aboutVideo } from '../../assets/videos'

const AboutUs = () => {
  return (
        <div className='mt-24 w-max-container items-center flex flex-col gap-20 mb-20 max-mob:p-6 p-10 overflow-hidden'>

    <div className='w-full object-cover flex flex-1 items-center justify-center '>
      <img src={about_us_banner} 
      width={1000}
      alt='about us banner' />
    </div>
    <h1 className='text-6xl font-palanquin font-bold text-gray-900 text-center'>Our Story
    
    <span>
    <p className='mt-10 font-montserrat text-gray-800 text-2xl text-center font-normal  max-w-2xl '>
    Welcome to Zumiez, your skateboarder's haven since [Year]. We're all about skateboarding, 
    offering top gear and knowledge. Our team lives and breathes the skate culture. 
    Find the best gear for every level, and join our community for inspiration and creativity. 
    Celebrate skateboarding with us - let's ride!
    </p>
    </span></h1>
     <img src={about_us_skate} width={140}   alt='skateboarder' />
      <div className='w-full p-10  gap-20 flex flex-wrap justify-center items-start '>
      <video className=' w-[460px] rounded-[100px]'   src={aboutVideo} />
      <h1 className='text-6xl font-palanquin font-bold text-gray-900 text-left'>Our Story
    
    <span>
    <p className='mt-10 font-montserrat text-gray-800 text-2xl text-right font-normal  max-w-2xl '>
    Welcome to Zumiez, your skateboarder's haven since [Year]. We're all about skateboarding, 
    offering top gear and knowledge. Our team lives and breathes the skate culture. 
    Find the best gear for every level, and join our community for inspiration and creativity. 
    Celebrate skateboarding with us - let's ride!
    </p>
    </span></h1>
      

      </div>
       
    
    </div>
  )
}

export default AboutUs