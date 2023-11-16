import React from "react"
import BlankPoster from  '../assets/images/blank_poster.png'
import '../components/BannerCard.css'
// import {Image, Container } from "react-bootstrap"
import pinkmono from '../assets/images/banner/pink_monogram.webp'

const BannerCard=({skate}) => {
    
    return(
        <div className='BannerCard_skate'>

                <div className="price">
                <p>
                  {skate.Title}
                </p> 
                <h2>
                    {skate.Price}
                </h2>
                </div>
   
                    <img
                    src={skate.Image1 !=='N/A' ?skate.Image1 : BlankPoster}
                    alt={skate.Title} 
                    />

         
            
      

      </div>
    )

}

export default BannerCard