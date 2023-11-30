import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section className= ' max-container lg:px-20  px-10  '>
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
        {products.map((products) => (
          <PopularProductsCard key={products.name} {...products} />
        ))}
      </div> 


    </section>
  )
}

export default PopularProducts