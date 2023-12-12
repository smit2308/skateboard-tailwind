import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';




const Button = ({label, iconURL, bgColor, textColor, borderColor, fullWidth, width, iconWidth, iconHeight,...buttonProps}) => {



  return (
    
    <button 
      className={`flex gap-2 justify-center items-center px-7 py-4  font-montserrat shadow-xl
                text-lg leading-none hover:scale-105 hover:shadow-2xl transition-all ease-in-out rounded-full max-lg:text-sm max-lg:px-4 max-lg:py-4
                ${
                  bgColor ? `${bgColor} $
                  ${textColor ? textColor : "text-black"}`
                  :
                  " bg-gray-900  text-white border-gray-900"
                }
                ${fullWidth && 'w-full'}"}
                
                ${width && `w-${width}`}`
                }
                
                {...buttonProps}>
        {label}

        {iconURL ? (  
             
          <img 
            src={iconURL}
            width={iconWidth ? iconWidth : 24}
            height={iconHeight}
            alt='arrow right icon'
            className='fill-red-600 ' />
           ):("")}
    </button>
    
  )
}

export default Button