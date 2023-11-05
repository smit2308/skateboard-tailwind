import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center px-7 py-4 border font-montserrat 
                text-lg leading-none bg-gray-900 rounded-full text-white border-cyan-300'>
        {label}
        <img 
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 ' />
    </button>
  )
}

export default Button