import React from 'react'
import BannerCard from '../components/BannerCard'
import monosvg from '../assets/images/banner/Mono_svg.svg'
import momo from '../assets/images/banner/momo.svg'
import pinkmono from '../assets/images/banner/pink_monogram.webp'

import monowheels from '../assets/images/banner/mono_wheels.webp'
import {statistics} from '../constants'


import baker from '../assets/images/banner/Baker.svg'

const skate= {
  Title: 'Baker Brand Logo Red',
  Price: '$120',
  Type: 'Deck',
  Image1: monosvg
  }

  const skate2= {
    Title: 'DGK Pink Monogram',
    Price: '$150',
    Type: 'Deck',
    Image1: pinkmono
    }

    const skate3= {
      Title: 'DGK Pink Monogram ',
      Price: '$50',
      Type: 'Wheels',
      Image1: monowheels
      }

const HomeBanner2 = () => {
  return (
    <div className='w-full flex lg:flex-row py-20 px-12 flex-col justify-center  align-middle my-4 max-container mob:bg-gray-100 rounded-3xl lg:gap-0 gap-20 '  >

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
               hover:shadow-[9px_8px_16px_5px_rgb(224,224,224)]  hover:scale-125;" >
            <img className='h-40 object-contain flex-1' 
            src={momo}>
              
              </img>  

            
          </button>

          <div className='flex flex-row lg:justify-start justify-center flex-wrap w-full mt-16  gap-16 max-sm:gap-6'>
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className='font-montserrat font-bold text-2xl max-sm:text-sm text-gray-700'>{statistic.value}</p>
                <p className='font-montserrat  text-xl max-sm:text-sm text-gray-500'>{statistic.label}</p>
              </div>
            ))}</div>


        </div>

        <div className='flex flex-row justify-center  lg:flex-start transition-all duration-[0.3s] ease-[ease-in-out]'>
        

          <a className=' z-30   hover:relative  hover:z-3 -mr-2'>
              <BannerCard  skate={skate} /></a>

          <a className=' z-10 -ml-16 max-sm:-ml-12 hover:relative hover:left-6 hover:bottom-2 hover:z-2  hover:rotate-6 transition-all duration-[0.3s] ease-[ease-in-out]'
            ><BannerCard  skate={skate2} /></a>
          <a className=' z-0 -ml-16 max-sm:-ml-12 hover:rotate-6 hover:left-6 hover:bottom-2 transition-all duration-[0.3s] ease-[ease-in-out] '> <BannerCard className='z-1' skate={skate3} /></a>
        
        </div>
       
        

    </div>

    


    
  
  )
}

export default HomeBanner2;