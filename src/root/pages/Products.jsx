import React from 'react'
import ProductCard from '../../components/ProductCard.jsx'
import { products } from '../../constants'
import Button from '../../components/Button.jsx'
import{sort} from '../../assets/icons'
import { useState } from 'react'
import { set } from 'react-hook-form'

const Products = () => {

  const [users, setUsers] = useState(products);
  const [sorted, setSorted] = useState({sorted: "id", reversed: false});
  const [searchTerm, setSearchTerm] = useState('');

  // Function to filter products based on search term
  const filterProducts = (event) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setUsers(filteredProducts);
  };

  const sortByPrice = () => {
    setSorted({sorted: "price", reversed: !sorted.reversed});
    const usersCopy = [...users];
    usersCopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setUsers(usersCopy);
  }

  const sortByRating = () => {
    setSorted({sorted: "rating", reversed: !sorted.reversed});
    const usersCopy = [...users];
    usersCopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });

    setUsers(usersCopy);
  }


  return (
    <section className= ' max-mob:mx-4 mx-10 mt-28  sm:mt-36 flex flex-col items-center sm:gap-10 gap-5'>
    <div className='flex flex-col justify-start gap-5  max-sm:justify-center'>
      <h2 className='sm:text-4xl text-3xl font-palanquin font-bold max-sm:text-center'>
         <span className='text-rose-700'> Results </span>( {products.length} )
      </h2>
      {/* <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray max-mob:text-sm max-sm:text-center text-xl'>
        Experience top-notch quality and style with our sought-after
        selections. Discover a world of comfort, design, and value
      </p> */}
    </div>


  <div className=  ' w-full  max-w-2xl  flex flex-1 items-center max-sm:flex-col gap-8 p-2 border bg-white border-slate-400 rounded-full '>
        <input 
        type='text'
        placeholder='Quick Search...'
        className='px-4 text-xl h-10 focus-visible:outline-none w-full bg-transparent' 
        value={searchTerm}
        
        onChange={filterProducts}
      
        />

      

      </div>

 
      <div className='w-full flex flex-row gap-10 max-sm:flex-col  justify-center '>

        <div className='bg-red-300 w-1/6 '>
          <h1 className='text-2xl font-palanquin font-bold max-sm:text-center '>
            Categories
            </h1>
        </div>
        <div className='flex flex-col gap-10 '>

          <div className=' flex flex-row gap-1 justify-end max-sm:justify-center items-center '>

          <h1 className='mr-auto text-xl font-montserrat max-sm:hidden ' >
            Results {users.length}
          </h1>

        <Button onClick={sortByPrice}
          label="Price"
          iconURL={sort}
          bgColor={'bg-white'}
          />

        <Button onClick={sortByRating}
          label="Rating"
          iconURL={sort}
          bgColor={'bg-white'}
          />


          </div>
        <div className=' grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2  max-md:grid-cols-2 gap-x-10 gap-y-16 mt-2 max-mob:gap-4 '  >
          {users.map((users) => (
           <ProductCard key={users.imgURL} {...users} />
          ))}
        </div> 
        </div>
   
      </div>







  </section>
  )
}

export default Products