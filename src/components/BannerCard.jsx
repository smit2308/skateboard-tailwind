import React from "react"
import BlankPoster from  '../assets/images/blank_poster.png'
import '../components/BannerCard.css'
// import {Image, Container } from "react-bootstrap"
import pinkmono from '../assets/images/banner/pink_monogram.webp'

const BannerCard=({skate}) => {
    
    return(
        <div className='w-60 h-[500px] overflow-hidden bg-neutral-100  transition-all duration-[0.1s] ease-[ease-in-out] shadow-lg
        pl-8 pr-4 py-4 rounded-[30px]  hover:shadow-2xl hover:scale-105 '>

                <div className="relative flex flex-col items-end gap-2">
                <p className="font-montserrat w-[150px]  text-right leading-[1.3rem] text-[1.3rem] font-normal text-[rgb(50,50,50)] z-[1] ">
                  {skate.Title}
                </p> 
                <h2 className="font-montserrat text-right text-2xl font-semibold text-[rgb(255,54,87)] z-[1];">
                    {skate.Price}
                </h2>
                </div>
   
                    <img className="relative w-full h-[600px] object-cover  -right-16 bottom-10
      filter: drop-shadow(2px 4px 8px #b4b4b4) rotate-[-30deg]"
                    src={skate.Image1 !=='N/A' ?skate.Image1 : BlankPoster}
                    alt={skate.Title} 
                    />

         
            
      

      </div>
    )

}

export default BannerCard