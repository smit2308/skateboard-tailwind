import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div key={customerName} className=' flex-1 flex-col  sm:w-[350px] min-w-[300px] w-full 
    rounded-3xl shadow-3xl px-10 py-10 hover:scale-105 transition-all ease-in-out bg-white  '>

    <div className='flex flex-row items-center gap-2 mb-8'>
    <img src={imgURL} 
      alt={customerName} 
      className='w-32 h-32 rounded-full object-cover mr-6'
    />

    <img src={star} 
        className='w-6 h-6'
        />

<h4 className='font-palanquin font-bold text-xl text-gray-600'>{rating}</h4>
    </div>

    <p className='font-palanquin  text-xl  text-gray-500  mb-10'>{feedback}</p>
    <h4 className='font-palanquin font-bold text-start text-xl text-gray-500'>- {customerName}</h4>
    
  </div>
  )
}

export default ReviewCard;