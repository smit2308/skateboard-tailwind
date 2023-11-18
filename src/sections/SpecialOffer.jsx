import React from 'react'
import nobg_element from '../assets/images/banner/nobg_element2.png'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-center py-20'>
    <div className=' w-[900px]   h-[500px] shadow-3xl rounded-3xl flex flex-row overflow-clip  '>

      <div className=' bg-gray-100  flex overflow-hidden'>
        <div className='  flex -rotate-[30deg] object-none '>
          <div className='  flex flex-col gap-6 -ml-16'>
            <img src={nobg_element} width={240}  alt="nobg_element" />
            <img src={nobg_element} width={240}  alt="nobg_element" />
            
          </div>
          <div className='   flex flex-col gap-6 -ml-24 -mt-36'>
            <img src={nobg_element} width={240}  alt="nobg_element" />
            <img src={nobg_element} width={240}  alt="nobg_element" />
            <img src={nobg_element} width={240}  alt="nobg_element" />
          </div>
          <div className='  flex flex-col gap-6 -ml-24'>
            <img src={nobg_element} width={240}  alt="nobg_element" />
            <img src={nobg_element} width={240}  alt="nobg_element" />
            
          </div>
          

        </div>
      </div>
      <div className='w-1/2 p-10 flex flex-col items-end'>
        <h1 className='font-montserrat text-right leading-[50px] font-medium text-[30px] mt-6 text-gray-600'>🛹 Skate into Savings!</h1>
        <h1 className='font-montserrat text-right leading-[50px] font-bold text-[50px] mt-6 text-gray-900'>Get 15% OFF on All Boards!</h1>
        <p className='font-montserrat text-right leading-[50px] font-medium text-[30px] mt-6 text-gray-600 mb-10'>Limited time only</p>

        <Button label='Shop Now' className='mt-10' iconURL= {arrowRight}/>
      </div>
      </div>
    
    </section>
  )
}

export default SpecialOffer