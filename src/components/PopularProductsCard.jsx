import React from 'react'
import PopularProducts from '../sections/PopularProducts'
import { star } from '../assets/icons'


const PopularProductsCard  = ({imgURL, name, price, rating}) => {

  return (
    // className='w-fit flex flex-col gap-4 mt-16 m-5 px-3 py-4 bg-white shadow-xl rounded-xl border-t-2 border-s-2 '
    <a href=''
        className='w-fit flex flex-col gap-2  m-2  py-2 mx-auto'>
        <div className="group flex rounded-3xl justify-center text-center relative overflow-hidden cursor-pointer">
        <img className='w-[220px] h-[280px]  object-cover max-sm:w-[196px] max-sm:h-[252px] max-mob:w-[140px] 
                    max-mob:h-[180px] ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 '
        src={imgURL} 
        alt={name} />
        <div className="absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
        </div>
        <div className='my-4 flex justify-start gap-2 max-mob:my-2 align-middle '>
            <img src={star}
            alt='rating'
  />
            
            <p className='w-[24px] h-[24px] font-montserrat  text-black'>{rating}</p>
        </div>
        <p className=' font-montserrat max-mob:text-sm max-sm:text-base max-xl:text-lg text-xl text-black '>{name}</p>
        <p className=' font-montserrat max-mob:text-sm max-sm:text-base max-xl:text-lg text-xl font-bold text-black'>{price}</p>
    </a>
  ) 
}

export default PopularProductsCard