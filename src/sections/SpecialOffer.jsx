import React from 'react'
import nobg_element from '../assets/images/banner/nobg_element1.png'
import nobg_element3 from '../assets/images/banner/nobg_element3.png'
import nobg_giraffe from '../assets/images/banner/nobg_giraffe1.png'
import nobg_element2 from '../assets/images/banner/nobg_element2.png'
import nobg_element4 from '../assets/images/banner/nobg_element4.png'
import nobg_element5 from '../assets/images/banner/nobg_element5.png'
import nobg_element6 from '../assets/images/banner/nobg_element6.png'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-center '>
    <div className=' lg:w-[900px]   lg:h-[500px] shadow-2xl rounded-3xl flex lg:flex-row flex-col overflow-clip  '>

      <div className=' bg-gray-100  flex overflow-hidden justify-center max-lg:h-[400px]'>
        <div className='  flex -rotate-[30deg] object-none max-lg:scale-150'>
          <div className='  flex flex-col gap-6 -ml-16'>
            <img src={nobg_element6} width={240}  alt="nobg_element" />
            <img src={nobg_element2} width={240}  alt="nobg_element" />
            
          </div>
          <div className='   flex flex-col gap-6 -ml-24 -mt-36'>
            <img src={nobg_element3} width={240}  alt="nobg_element" />
            <img src={nobg_element} width={240}  alt="nobg_element" />
            <img src={nobg_element3} width={240}  alt="nobg_element" />
          </div>
          <div className='  flex flex-col gap-6 -ml-24'>
            <img src={nobg_element5} width={240}  alt="nobg_element" />
            <img src={nobg_element4} width={240}  alt="nobg_element" />
            
          </div>
          
          
          

        </div>
      </div>
      <div className='lg:w-1/2 max-lg:h-1/2 p-10 flex flex-col items-end justify-center max-mob:items-center '>
        <h1 className='font-montserrat text-right max-mob:text-center  leading-[40px] font-medium text-[24px] max-mob:text-lg  text-gray-600'>🛹 Skate into Savings! 🛹</h1>
        <h1 className='font-montserrat text-right max-mob:text-center  leading-[50px] max-mob:leading-10 font-bold text-[44px] max-mob:text-[30px] mt-6 max-mob:mt-4 text-gray-900'>Get 15% OFF on All Boards!</h1>
        <p className='font-montserrat text-right max-mob:text-center  leading-[40px] font-medium text-[30px] max-mob:text-xl mt-6 text-gray-600 mb-10'>Limited time only</p>

        <Button label='Shop Now'  iconURL= {arrowRight}/>
      </div>
      </div>
    
    </section>
  )
}

export default SpecialOffer