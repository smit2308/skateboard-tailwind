import React from 'react'
import '../sections/HomeBanner.css'
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

const HomeBanner = () => {
  return (
    <div className='homebanner' >

      <div className='left'>
        <p className='font-["SF_Pro_Text","SF_Pro_Icons","Helvetica_Neue","Helvetica","Arial",sans-serif] font-[lighter] text-[2.5rem] no-underline text-[#474747]'>DGK</p>   

        <h1>New</h1>
        <h1>Monogram</h1>
        <h1>Collection</h1>

        
          <button className="view" >
            <img src={momo}></img>  

            
          </button>

          <div className='flex justify-start items-start max-sm:justify-center flex-wrap w-full mt-20 mb-10 gap-10 '>
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className='font-montserrat font-bold text-xl  text-gray-700'>{statistic.value}</p>
                <p className='font-montserrat  text-x text-gray-500'>{statistic.label}</p>
              </div>
            ))}</div>


        </div>

        <div className='right'>
        

          <a><BannerCard className='card1' skate={skate} /></a>
          <a><BannerCard className='card2' skate={skate2} /></a>
          <a><BannerCard className='card3' skate={skate3} /></a>
        
        </div>
       
        

    </div>

    


    
  
  )
}

export default HomeBanner;