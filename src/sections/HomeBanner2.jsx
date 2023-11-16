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
    <div className='w-full flex xl:flex-row py-20 px-12 flex-col justify-center  align-middle my-4 max-container bg-gray-100 rounded-3xl  '  >

      <div className='relative xl:w-2/5 flex flex-col justify-center items-start max-sm:items-center w-full  max-xl:padding-x  z-10 '>
        <p className=' font-helvetica font-light text-3xl z-1 text-[#474747] max-sm:text-center'>DGK</p>   
        <div className='font-helvetica text-7xl font-bold text-[#474747] leading-[80px] max-sm:text-center'>
        <h1>New</h1>
        <h1 className='text-rose-700 '>Monogram</h1>
        <h1>Collection</h1>
        </div>

        
          <button
            className="w-96 h-16 items-center overflow-hidden flex transition-all duration-[0.2s] ease-[ease-in-out] shadow-[8px_8px_14px_4px_rgb(216,216,216)] 
              mt-4 m-0 p-0 rounded-[3rem] hover:bg-[linear-gradient(to_right,rgb(255,0,34),rgb(255,98,0),rgb(0,175,120),rgb(123,0,164),violet)]
               hover:shadow-[9px_8px_16px_5px_rgb(224,224,224)]  hover:scale-125;" >
            <img className='h-40 object-contain flex-1' 
            src={momo}>
              
              </img>  

            
          </button>

          <div className='flex justify-start items-start max-sm:justify-center flex-wrap w-full mt-16  gap-16 '>
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className='font-montserrat font-bold text-2xl  text-gray-700'>{statistic.value}</p>
                <p className='font-montserrat  text-xl text-gray-500'>{statistic.label}</p>
              </div>
            ))}</div>


        </div>

        <div className='flex flex-row flex-start '>
        

          <BannerCard className=' z-3  transition-all duration-[0.2s] ease-[ease-in-out] hover:relative  hover:z-3 ' skate={skate} />
          <BannerCard className=' z-2 right-6 ' skate={skate2} />
          <BannerCard className='z-1' skate={skate3} />
        
        </div>
       
        

    </div>

    


    
  
  )
}

export default HomeBanner2;