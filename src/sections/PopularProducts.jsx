import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section className= ' max-container lg:px-20  px-10  min-h-screen  '>
      <div className='flex flex-col justify-start gap-5 mb-10 max-sm:justify-center'>
        <h2 className='text-4xl font-palanquin font-bold max-sm:text-center'>
          Our <span className='text-blue-600'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray max-mob:text-sm max-sm:text-center'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className=' grid lg:grid-cols-4 md:grid-cols-3  max-md:grid-cols-2 gap-4 mt-2 max-mob:gap-4 '  >
        {products.map((products) => (
          <PopularProductsCard key={products.name} {...products} />
        ))}
      </div> 

    {/* <div className='flex flex-col xl:flex-row justify-center align-middle'>


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
    </div> */}
    </section>
  )
}

export default PopularProducts