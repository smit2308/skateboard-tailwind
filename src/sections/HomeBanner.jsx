import React from 'react'
import BannerCard from '../components/BannerCard'
import momo from '../assets/images/banner/momo.svg'

import {statistics} from '../constants'
import { products } from '../constants'

import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { Link } from 'react-router-dom'

const HomeBanner2 = () => {

//  mob:bg-gray-100
  return (
    <section id='home'
    className=' w-full flex xl:flex-row xl:px-10 flex-col justify-center align-center  max-container '>
    <div 
       className='w-full relative flex  lg:flex-row py-20 px-12 flex-col justify-center  align-middle my-10 max-mob:py-0 max-container  rounded-3xl lg:gap-0 gap-20 max-mob:gap-12 bg-[linear-gradient(-45deg,_#ee7752,_#e73c7e,_#23a6d5,_#23d5ab)] animate-[gradient_10s_ease_infinite] [background-size:400%_400%]'  >

      <div className='relative xl:w-2/5 flex flex-col justify-center lg:items-start items-center w-full    z-10 gap-6'>
        <p className=' font-helvetica font-light text-3xl z-1 text-white text-center lg:text-start'>DGK</p>   
        <div className='font-helvetica text-7xl max-sm:text-5xl font-bold text-white leading-[80px] max-sm:leading-[60px] lg:text-start text-center'>
        <h1>New</h1>
        <h1 className=' text-white    '>Monogram</h1>
        <h1>Collection</h1>
        </div>

        
        <Link to='/products'>
        <Button
            label="Shop  Now"
            iconURL= {arrowRight}/>
        </Link>
        
          {/* <button
            className="w-96 h-16 max-sm:w-60 max-sm:h-12 items-center overflow-hidden flex transition-all duration-[0.2s] ease-[ease-in-out] shadow-[8px_8px_14px_4px_rgb(216,216,216)] 
              mt-4 m-0 p-0 rounded-[3rem] hover:bg-[linear-gradient(to_right,rgb(255,0,34),rgb(255,98,0),rgb(0,175,120),rgb(123,0,164),violet)]
               hover:shadow-[9px_8px_16px_5px_rgb(224,224,224)]  hover:scale-110 animate-[gradient_15s_ease_infinite]" >
            <img className='h-40 object-contain flex-1 ' 
            src={momo}>
              
              </img>  

            
          </button> */}

          <div className='flex flex-row lg:justify-start justify-center flex-wrap w-full mt-8 max-mob:mt-8 gap-16 max-sm:gap-6'>
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className='font-montserrat font-bold text-2xl max-sm:text-sm text-white'>{statistic.value}</p>
                <p className='font-montserrat  text-xl max-sm:text-sm text-gray-100'>{statistic.label}</p>
              </div>
            ))}</div>


        </div>

        <div className='flex flex-row justify-center items-center lg:flex-start transition-all duration-[0.3s] ease-[ease-in-out]'>
        
     
        
        
          <a className=' z-30   hover:relative  hover:z-3 -mr-2'>
            
          <BannerCard  skate={products[0]} />  </a>

          <a className=' z-10 -ml-16 max-sm:-ml-12 hover:relative hover:left-6 hover:bottom-2 hover:z-2  hover:rotate-6 transition-all duration-[0.3s] ease-[ease-in-out]'
            >   <BannerCard  skate={products[1]} /></a>
          <a className=' z-0 -ml-16 max-sm:-ml-12 hover:rotate-6 hover:left-6 hover:bottom-2 transition-all duration-[0.3s] ease-[ease-in-out] '> <BannerCard className='z-1' skate={products[2]} /></a>
        
        </div>
       
        

    </div>

    

    </section>
    
  
  )
}

export default HomeBanner2;