import React from 'react'
import ProductCard from '../components/ProductCard'
import {popularproducts} from '../constants'

const PopularProducts = () => {
  return (
    <section className= ' w-full  px-10 max-mob:px-6  justify-center align-center  max-container '>
      <div className='flex flex-col justify-start gap-5 mb-10 max-sm:justify-center'>
        <h2 className='text-4xl font-palanquin font-bold max-sm:text-center'>
           <span className='text-rose-700'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray max-mob:text-sm max-sm:text-center text-xl'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className=' grid lg:grid-cols-4 md:grid-cols-3  max-md:grid-cols-2 gap-4 mt-2 max-mob:gap-4 '  >
        {popularproducts.map((productdata) => (
          <ProductCard key={productdata.name} {...productdata} />
        ))}
      </div> 


    </section>
  )
}

export default PopularProducts