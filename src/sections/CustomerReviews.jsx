import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='flex flex-col gap-4  flex-wrap  py-20 max-container' >
      <h3 className='font-palanquin text-4xl font-bold text-center text-gray-700 m-auto'>
        What Our 
        <span className='text-rose-700'> Customers </span>
        Say?
      </h3>

      <p className='font-palanquin text-xl font-semibold m-auto text-gray-500 text-center max-w-lg'>
      Curious about what sets our products apart? Dive into the firsthand experiences of our amazing customers. 
      </p>

      <div className=' flex justify-center flex-wrap gap-9 py-20'>
        {reviews.name}
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews