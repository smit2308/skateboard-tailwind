import React from "react"
import BlankPoster from  '../assets/images/blank_poster.png'
import { Link } from "react-router-dom"

const BannerCard=({skate}) => {
    
 
  
    return(
      <Link to={`/products/${skate.id}`} state={{id: skate.id}}> 
      <div className='w-[200px] h-[400px] max-sm:w-[140px] max-sm:h-[300px] xl:w-60 xl:h-[500px]  overflow-hidden bg-neutral-100  transition-all duration-[0.1s] ease-[ease-in-out] shadow-lg
        p-4 rounded-[30px]  hover:shadow-2xl hover:scale-105  '>

                <div className="relative flex flex-col items-end gap-2">
                <p className="font-montserrat max-sm:text-sm   text-right max-xl:text-lg text-xl font-normal text-[rgb(50,50,50)] ">
                  {skate.name}
                </p> 
                <h2 className="font-montserrat text-right text-2xl max-sm:text-sm max-xl:text-lg font-semibold text-rose-600 ">
                    $ {skate.price}
                </h2>
                </div>
   
                    <img className="relative w-full h-[480px] xl:h-[600px] max-sm:h-[300px] object-cover  xl:-right-20 -right-16 max-sm:-right-8 xl:bottom-10 bottom-8 max-sm:bottom-0
      filter: drop-shadow(2px 4px 8px #b4b4b4) rotate-[-30deg]"
                    src={skate.imgURL !=='N/A' ?skate.imgURL : BlankPoster}
                    alt={skate.Title} 
                    />

         
            
      

      </div>
      </Link>
    )

}

export default BannerCard