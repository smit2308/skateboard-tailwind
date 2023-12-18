import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Subscribe = () => {
  return (
    <section className='flex justify-center items-center flex-col gap-10 '
    id='Contact-us'>
      <h3 className='font-palanquin font-semibold text-4xl text-white max-sm:text-center'>Sign Up for
        <span className='text-rose-600'> Updates </span>
        & Newsletter
      </h3>
      <div className= ' max-w-3xl w-full flex items-center max-sm:flex-col gap-8 p-2.5 sm:border sm:bg-white border-white rounded-full'>
        <input 
        type='text'
        placeholder='subscribe@zumiez.com'
        className='input' />

        <div className='flex max-sm justify-end items-center max-sm w-full max-sm:justify-center'>
          <Button label="Sign Up"
          bgColor={'bg-gray-900'}
          textColor={'text-white'}
          iconURL={arrowRight}
          fullWidth/>
        </div>
      </div>
      </section>
  )
}

export default Subscribe;