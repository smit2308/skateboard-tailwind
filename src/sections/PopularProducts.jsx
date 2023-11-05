import React from 'react'
import { products } from '../constants'

const PopularProducts = () => {
  return (
    <section className= 'max-container  xl:px-28  justify-center align-center min-h-screen   bg-green-200'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-blue-600'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

    <div className='flex flex-col xl:flex-row justify-center align-middle'>


           {products.map((products) => (
            <a href='/' key={products.imgURL}>
                <div  className='mt-16 m-5 px-3 py-4 bg-white shadow-xl rounded-xl border-t-2 border-s-2'>
                <img src={products.imgURL} alt={products.name} 
                width={240}
                height={600}
                className=' bg-red-500'/>

                <p className='mt-8 mb-4 font-montserrat text-center text-xl text-black'>{products.name}</p>
                <p className='mb-2 font-montserrat text-center text-xl  text-black'>{products.price}</p>
              </div >
            </a>

            ))}
    </div>
    </section>
  )
}

export default PopularProducts