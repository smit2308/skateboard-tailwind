import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 flex-col sm:w-[350px] min-w-[300px] w-full 
                    rounded-3xl shadow-3xl px-10 py-16 hover:scale-105 transition-all ease-in-out'>
        <div className='w-11 h-11 flex justify-center items-center bg-rose-700 rounded-full'>
            <img src={imgURL}
                width={24}>
            </img>  
        </div>
        <h3 className='font-palanquin leading-normal font-bold text-2xl mt-6 text-gray-900'>{label}</h3>
        <p className='font-montserrat leading-normal text-md mt-2 text-gray-900 break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard;