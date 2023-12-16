import React from 'react';
import { skate1 } from '../assets/images';
import { useState } from 'react';
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';


const CartItem = (data) => {

    

    const [count, setCount] = useState(1);

    const ChangeQuantity = (value) => {

      setCount(count + value)
    }
  

  return (
    
    <section className='flex flex-row gap-10 '>
        <Link   to={`/products/${data.name}`} state={{data}}>
             <img src={data.imgURL} width={100} className='w-[160px] h-[160px]  shadow-lg max-mob:shadow-md border border-1  border-slate-200 rounded-3xl max-lg:rounded-xl' />
        </Link>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl'>{data.name}</h1>
                <div className='flex-row flex gap-4 items-center  justify-between  w-32 '>
                    {count >= 2 ? 
                    (<button onClick={() => ChangeQuantity(-1)}><HiMinusCircle   size={32} color={'#404040'} /> 
                    </button>)
                    : 
                    (<button ><HiMinusCircle   size={32} color={'#c7c7c7'} /> 
                    </button>)}
                        
                    
                    <h1 className='text-center text-xl max-lg:text-lg font-montserrat font-semibold   text-rose-800 w-6'>
                        {count}
                    </h1>
                    <button  onClick={() => ChangeQuantity(1)}  ><HiPlusCircle size={32} color={'#404040'}/></button> 
        
                </div>
                <p className='text-rose-700 font-montserrat text-2xl max-lg:text-2xl font-bold '>
                    $ {(data.price)*count}
          </p>
            </div>


                
            

    </section>
    
  )
}



export default CartItem;