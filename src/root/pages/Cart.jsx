import React from 'react'
import CartItem from '../../components/CartItem'
import { skate1 } from '../../assets/images'
const Cart = () => {

  const data = [
     {
        key: 1,
        imgURL:skate1,
        name: "MONO SVG Crazyy SKRSKR",
        price: 100,
        rating: 5
    },

     {
        key: 2,
        imgURL:skate1,
        name: "MONO SVG Crazyy SKRSKR",
        price: 100,
        rating: 5
    },

  
  ];

  
  // Function to calculate total price
  const calculateTotalPrice = () => {
    return data.reduce((total, item) => total + item.price, 0);
  }

  return (
    <section className='mt-28 px-10 bg-slate-50 max-container flex flex-col gap-10'>
        <h1 className='text-4xl'>Item Summary</h1>

      <div className='flex flex-row gap-20 '> 
        <div className='flex flex-col gap-4'>
          {data.map((item) => (<CartItem {...item}/>))}
        </div>

        <div className='flex flex-col gap-4'>
                Subtotal
                
                <h1>Total Items ({data.length})</h1>
                <h1>Total Price {calculateTotalPrice()}</h1>
        </div>
        
      </div>
    </section>
  )
}

export default Cart