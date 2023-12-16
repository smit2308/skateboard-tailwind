import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { star } from '../../assets/icons'
import Button from '../../components/Button'
import { InstagramColored } from '../../assets/icons'
import { useEffect } from 'react'
import { useState } from 'react'
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import {products} from '../../constants'


const ProductDetails = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Fetching product details
    const productId = parseInt(id, 10);
    const productFound = products.find(p => p.id === productId);
    setProduct(productFound);
  }, [id]);

  const ChangeQuantity = (value) => {
    setCount(count + value)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };
  }, []);

  useEffect(() => {
    const storedScrollPosition = sessionStorage.getItem('scrollPosition');

    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition, 10));
    }
  }, []);

    // Check if product is not null before rendering the rest of the component
    if (!product) {
      return <div>Loading product details...</div>;
    }
  


  return (

    <section className='mt-28 max-sm:mt-20  py-6  max-container flex flex-row gap-10 max-lg:gap-10  rounded-3xl  px-10 max-lg:px-6 max-sm:flex-col-reverse max-mob:items-center  '>

      <div className='flex flex-col gap-4  max-w-lg max-lg:max-w-sm   '>
        <h2 className=' max-w-xl text-5xl max-lg:text-4xl max-mob:text-[36px]  text-left leading-[64px] max-lg:leading-[48px] max-mob:leading-[32px] font-montserrat font-bold text-gray-900  rounded-3xl  '>
          {product.name}
        </h2>

        <div className=' flex flex-row flex-start gap-4 mob:hidden'>

          {[...Array(Math.floor(product.rating))].map((_, index) => (
            <img src={star}
              alt='rating'
              width={24}
              className='max-lg:w-5'
            />
          ))}

          <h1 className='text-2xl max-lg:text-lg font-montserrat font-bold   text-black'>{product.rating}</h1>
        </div>
        <div className='flex flex-row gap-10 '>

          <p className='text-rose-700 font-montserrat text-3xl max-lg:text-2xl font-bold '>
            $ {product.price}
          </p>

          <div className=' flex flex-row flex-start gap-4 justify-center items-center max-mob:hidden'>

            {[...Array(Math.floor(product.rating))].map((_, index) => (
              <img src={star}
                alt='rating'
                width={24}
                className='max-lg:w-5'
              />
            ))}

            <h1 className='text-2xl max-lg:text-lg font-montserrat font-bold   text-black'>{product.rating}</h1>
          </div>
        </div>

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



        <div className='flex flex-row gap-4'>
          <div className='flex max-lg:w-'>
            <Button
              label="Add to cart"
              iconURL={null}
              fullWidth={false}
              bgColor={'bg-rose-800'}
              textColor={'text-white'}
              />
          </div>

          <div className='flex max-lg:w-'>
            <Button
              label="Buy Now"
              iconURL={null}

              width={'20'}
              bgColor={'bg-white'}
              textColor={'text-rose-800'} />
          </div>
        </div>


        <p className='font-montserrat  rounded-xl text-lg max-lg:text-sm    py-4  text-gray-900  text-left max-mob:text-center font-normal   z-30'>
          With a sleek design and top-notch components,
          it's the perfect choice for cruising through the streets or mastering tricks at the skate park.
          Embrace the thrill of skateboarding with the 'SpeedMaster'
        </p>



        <div className='flex flex-row gap-10 max-sm:hidden  '>
          <img src={product.imgURL} width={100} className='max-lg:w-[80px] max-lg:h-[80px] shadow-xl border border-1  border-slate-200 rounded-3xl max-lg:rounded-xl' />
          <img src={product.imgURL} width={100} className='max-lg:w-[80px] max-lg:h-[80px]  shadow-xl border border-1 border-slate-200 rounded-3xl max-lg:rounded-xl' />
          <img src={product.imgURL} width={100} className='max-lg:w-[80px] max-lg:h-[80px]  shadow-xl border border-1 border-slate-200 rounded-3xl max-lg:rounded-xl' />
        </div>

      </div>

      <div className='flex mob:flex-row gap-10 flex-col max-lg:max-w-sm max-sm:gap-6 items-center' >
        <div className='overflow-hidden w-[300px] h-[600px] max-lg:w-[230px] max-lg:h-[460px]  flex flex-1 rounded-[40px] border border-1 border-slate-200 shadow-2xl
                      max-sm:w-[300px] max-sm:h-[300px] max-mob:w-[280px] max-mob:h-[280px] max-mob:shadow-md  transition-all ease-in-out hover:shadow-2xl cursor-zoom-in'>
          <img src={product.imgURL} width={300} className='  object-cover hover:scale-125 transition-all duration-500 cursor-pointer ' />
        </div>


        <div className='flex mob:flex-col flex-row gap-10 sm:hidden max-sm:gap-6  '>
          {/* max-mob:w-[60px] max-mob:h-[60px] */}
          <img src={product.imgURL} width={100} className='w-[80px] h-[80px]  shadow-lg max-mob:shadow-md border border-1  border-slate-200 rounded-3xl max-lg:rounded-xl' />
          <img src={product.imgURL} width={100} className='w-[80px] h-[80px] shadow-lg max-mob:shadow-md border border-1  border-slate-200 rounded-3xl max-lg:rounded-xl' />
          <img src={product.imgURL} width={100} className='w-[80px] h-[80px] shadow-lg max-mob:shadow-md border border-1  border-slate-200 rounded-3xl max-lg:rounded-xl' />
        </div>
      </div>
    </section>


  )
}

export default ProductDetails