import React from 'react'
import { about_us_skate, about_us_banner } from '../../assets/images'
import { CustomerReviews } from '../../sections'
import { aboutVideo } from '../../assets/videos'
import { SmitPicture, SmitPicture2 } from '../../assets/images'
import { socialMediaColored } from '../../constants'

const AboutUs = () => {
  return (
        <div className='mt-24 w-max-container items-center flex flex-col gap-20 mb-20 max-mob:p-6 p-10 overflow-hidden'>

    <div className='w-full object-cover flex flex-1 items-center justify-center '>
      <img src={about_us_banner} 
      width={1000}
      alt='about us banner' />
    </div>
    <h1 className='md:text-8xl text-6xl font-palanquin font-bold text-gray-900 text-center'>Our Story
    
    <span>
    <p className='mt-10 font-montserrat text-gray-800 text-2xl text-center font-normal  max-w-2xl max-mob:text-xl '>
    Welcome to Zumiez, your skateboarder's haven since 2010. We're all about skateboarding, 
    offering top gear and knowledge. Our team lives and breathes the skate culture. 
    Find the best gear for every level, and join our community for inspiration and creativity. 
    Celebrate skateboarding with us - let's ride!
    </p>
    </span></h1>
    
    <div className=' flex sm:flex-row flex-col items-center sm:justify-center max-sm:gap-4  font-bold font-montserrat'>
    <h1 className='sm:w-2/5 text-[50px] lg:leading-[100px] max-lg:leading-[60px] text-right   text-gray-800  sm:-rotate-90 max-lg:text-[40px] max-sm:text-center '>
            LIVE
            <span>
            <h1 className='text-[130px]    text-gray-900 max-lg:text-[80px]  '>
            Fast
          </h1>

            </span>
          </h1>
          
    <img src={about_us_skate} width={160}   className='max-lg:w-[120px]' alt='skateboarder' />

    <h1 className='sm:w-2/5 text-[50px] leading-[100px] max-lg:text-[40px]  max-lg:leading-[60px] text-gray-800 sm:rotate-90 max-sm:text-center '>
            SKATE
            <span>
            <h1 className='text-[130px]  font-bold  max-lg:text-[80px] text-gray-900 '>
            Faster
          </h1>
            </span>
          </h1>
    </div>
     


      <div className='w-full  gap-20 flex flex-wrap justify-center items-start '>

        
  
        {/* <div className='flex justify-end   '> */}
      <div className='flex flex-col  gap-10  z-30 '> 
<div className='flex md:flex-row flex-col   justify-between md:items-end items-center gap-2'>
<img src={SmitPicture}  className=' w-[160px] h-[160px]   rounded-full'   alt='skateboarder' /> 
<h1 className='md:text-4xl text-3xl md:text-right text-center font-palanquin  text-gray-800 bg-white rounded-xl  '>
            Creator Of This 
            <span>
            <h1 className='md:text-8xl text-6xl md:text-right text-center font-palanquin font-bold text-gray-900 bg-white rounded-xl  '>
            Web App 
          </h1>
            </span>
          </h1>

        
</div>    
        <p className=' font-montserrat bg-white rounded-xl text-2xl max-mob:text-xl   text-gray-800 md:text-right text-center font-normal  max-w-2xl z-30'>
        Welcome to my digital realm where web design, coding, and skateboarding collide! This website is one my favourite personal projects to date. 
        I'm a Front-end web developer, and I love to create beautiful, functional websites. I'm also a skateboarder, and I wanted to create a website 
        that would combine my two passions. I hope you enjoy this website as much as I enjoyed creating it!
        </p>
        
        <div className='flex gap-6 justify-center items-center md:justify-end '>
          {socialMediaColored.map((logo, index) => ( 
            <img src={logo.src} width={60} className='bg-white rounded-lg shadow-xl max-mob:w-12' />
           
          ))}
          </div>  
      </div>


      <video autoPlay muted loop className=' w-[400px] rounded-[60px] shadow-xl border-8 border-seperate  '  type='video/mp4'   >
        <source src={aboutVideo} />
        Your Browser doesnt support the video tag
        </video>
      {/* <img src={SmitPicture}  className='  w-[300px] h-[500px] z-0 -ml-80'   alt='skateboarder' /> */}
      
      
      {/* </div> */}

      

      </div>
       
    
    </div>
  )
}

export default AboutUs