import React from 'react'
import Nav from '../components/Nav'
import { Home, Products } from './pages'
import { Outlet, Navigate } from 'react-router-dom'

const RootLayout = () => {
  return (
    <section className='w-full flex flex-col gap-10'>

        
        <Outlet />
    </section> 
  )
}
export  default RootLayout