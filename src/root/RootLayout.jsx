import React from 'react'
import Nav from '../components/Nav'
import { Home } from './pages'

const RootLayout = () => {
  return (
    <section className='w-full flex flex-col gap-10'>

        <Nav />
        <Home />
    </section> 
  )
}
export  default RootLayout