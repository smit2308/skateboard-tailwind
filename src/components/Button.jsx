import React from 'react'
import { Link } from 'react-router-dom';




const Button = ({onClick, label, iconURL, bgColor, textColor, borderColor, fullWidth, width, iconWidth, iconHeight,...buttonProps}) => {



  return (
    
    <button 
      className={`flex min-w-40 gap-2 justify-center items-center px-7 py-4  font-montserrat font-medium border shadow-lg 
                text-lg leading-none hover:scale-105 hover:shadow-xl transition-all ease-in-out rounded-full max-lg:text-sm max-lg:px-4 max-lg:py-4
                ${
                  bgColor ? `${bgColor} $
                  ${textColor ? textColor : "text-black"}`
                  :
                  " bg-gray-900  text-white border-gray-900"
                }
                ${fullWidth && 'w-full'}"}
                
                ${width? `w-${width}`: 'min-w-[300px]'}'}}`
                }
                
                {...buttonProps}
                
                onClick={buttonProps.onClick}>
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