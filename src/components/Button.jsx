import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center px-7 py-4  font-montserrat 
                text-lg leading-none bg-gray-900 rounded-full text-white hover:scale-105 transition-all ease-in-out '>
        {label}
        <img 
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 ' />
    </button>
  )
}

export default Button