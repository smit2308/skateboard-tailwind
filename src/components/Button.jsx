import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';





const Button = ({label, iconURL, bgColor, textColor, borderColor, fullWidth, directTo,...buttonProps}) => {



  return (
    <button 
      className={`flex justify-center items-center px-7 py-4  font-montserrat 
                text-lg leading-none hover:scale-105 transition-all ease-in-out rounded-full
                ${
                  bgColor ? `${bgColor} $
                  ${textColor ? textColor : "text-black"}`
                  :
                  " bg-gray-900  text-white border-gray-900"
                }
                ${fullWidth && 'w-full'}"}`}
                
                {...buttonProps}>
        {label}

        {iconURL ? (        
          <img 
            src={iconURL}
            width={24}
            height={24}
            alt='arrow right icon'
            className='ml-2 ' />):("")}

    
    </button>
  )
}

export default Button