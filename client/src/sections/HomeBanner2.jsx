import React from 'react'
import BannerCard from '../components/BannerCard'
import momo from '../assets/images/banner/momo.svg'

import {statistics} from '../constants'
import { bannerImages } from '../constants'


const HomeBanner2 = () => {
 
  return (
    <div className='w-full flex lg:flex-row  px-12 py-10  flex-col justify-center  align-middle  max-container mob:bg-gray-100 rounded-3xl lg:gap-0 gap-20 max-mob:gap-12 '  >

      <div className='relative xl:w-2/5 flex flex-col justify-center lg:items-start items-center w-full    z-10 '>
        <p className=' font-helvetica font-light text-3xl z-1 text-[#474747] text-center lg:text-start'>DGK</p>   
        <div className='font-helvetica text-7xl max-sm:text-5xl font-bold text-[#474747] leading-[80px] max-sm:leading-[60px] lg:text-start text-center'>
        <h1>New</h1>
        <h1 className='text-rose-700 '>Monogram</h1>
        <h1>Collection</h1>
        </div>

        
          <button
            className="w-96 h-16 max-sm:w-60 max-sm:h-12 items-center overflow-hidden flex transition-all duration-[0.2s] ease-[ease-in-out] shadow-[8px_8px_14px_4px_rgb(216,216,216)] 
              mt-4 m-0 p-0 rounded-[3rem] hover:bg-[linear-gradient(to_right,rgb(255,0,34),rgb(255,98,0),rgb(0,175,120),rgb(123,0,164),violet)]
               hover:shadow-[9px_8px_16px_5px_rgb(224,224,224)]  hover:scale-110 animate-[gradient_15s_ease_infinite]" >
            <img className='h-40 object-contain flex-1 ' 
            src={momo}>
              
              </img>  

            
          </button>

          <div className='flex flex-row lg:justify-start justify-center flex-wrap w-full mt-16 max-mob:mt-8 gap-16 max-sm:gap-6'>
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className='font-montserrat font-bold text-2xl max-sm:text-sm text-gray-700'>{statistic.value}</p>
                <p className='font-montserrat  text-xl max-sm:text-sm text-gray-500'>{statistic.label}</p>
              </div>
            ))}</div>


        </div>

        <div className='flex flex-row justify-center  lg:flex-start transition-all duration-[0.3s] ease-[ease-in-out]'>
        
     
        
        
          <a className=' z-30   hover:relative  hover:z-3 -mr-2'>
          <BannerCard  skate={bannerImages[0]} />  </a>

          <a className=' z-10 -ml-16 max-sm:-ml-12 hover:relative hover:left-6 hover:bottom-2 hover:z-2  hover:rotate-6 transition-all duration-[0.3s] ease-[ease-in-out]'
            >   <BannerCard  skate={bannerImages[1]} /></a>
          <a className=' z-0 -ml-16 max-sm:-ml-12 hover:rotate-6 hover:left-6 hover:bottom-2 transition-all duration-[0.3s] ease-[ease-in-out] '> <BannerCard className='z-1' skate={bannerImages[2]} /></a>
        
        </div>
       
        

    </div>

    


    
  
  )
}

export default HomeBanner2;