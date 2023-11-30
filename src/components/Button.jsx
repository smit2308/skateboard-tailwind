import React from 'react'

const Button = ({label, iconURL, bgColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center px-7 py-4  font-montserrat 
                text-lg leading-none hover:scale-105 transition-all ease-in-out rounded-full
                ${
                  bgColor ? `${bgColor} $
                  {textColor} $ {borderColor}`
                  :
                  " bg-gray-900  text-white border-gray-900"
                }
                ${fullWidth && 'w-full'}"}`}>
        {label}
        <img 
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 ' />
    </button>
  )
}

export default Button