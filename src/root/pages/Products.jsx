import React from 'react'
import ProductCard from '../../components/ProductCard.jsx'
import { products, filterOptions } from '../../constants'
import Button from '../../components/Button.jsx'
import{sort} from '../../assets/icons'
import { useState, useEffect } from 'react'
import { set } from 'react-hook-form'

const Products = () => {

  const [users, setUsers] = useState(products);
  const [sorted, setSorted] = useState({sorted: "id", reversed: false});
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState([]);
  const filterarray =[];
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    // This effect will run whenever checkedItems changes
    console.log('Checked Items:', checkedItems);
    set
    const usersCopy = [...users];
   usersCopy.filter((user) => 
     user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
  }, [checkedItems]);

  const handleToggle = (val) => {
    if (checkedItems.includes(val)) {
      setCheckedItems(checkedItems.filter(item => item !== val));
    } else {
      setCheckedItems([...checkedItems, val]);
    }
  };


  
  // Function to filter products based on search term
  const Searchproducts = (event) => {
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
        
        onChange={Searchproducts}
      
        />

      

      </div>

 
      <div className='w-full flex flex-row gap-10 max-sm:flex-col  justify-center '>

        <div className=' p-4 flex flex-col gap-10 max-md:hidden'>
          
          <div className='flex flex-col gap-8 '>

            {filterOptions.map((option) => (
              <div>
                <h1 className='text-xl font-montserrat font-semibold  text-gray-800 mb-2'>
                  {option.label}
                </h1>

                <div className='flex flex-col gap-2 '>
                {option.values.map((val) => (

                  <div class="flex items-center gap-2">
                    <input type='checkbox' value={val}
                    className=' w-4 h-4 accent-rose-700  bg-gray-100 border-gray-300 rounded focus:ring-rose-700 focus:ring-2'
                    onChange={() => handleToggle(val)} />
                     <label className='text-left ms-2 text-lg text-gray-800 font-normal'>{val}</label>
                    </div>
                    
                ))}

                </div>
                
                
                
                </div>
              
            ))}

          </div>



        </div>
        <div className='flex flex-col gap-10 '>

          <div className=' flex flex-row gap-1 md:justify-end justify-between  items-center '>

          <h1 className='md:mr-auto text-xl font-montserrat  text-center pl-6' >
            Results {users.length}
          </h1>

          <div className='md:hidden'>
          <Button 
          label="Filters"
          iconURL={sort}
          bgColor={'bg-white'}
          />
          </div>

          <div className='max-md:hidden'>
          <Button onClick={sortByPrice}
          label="Price"
          iconURL={sort}
          bgColor={'bg-white'}
          />
          </div>

                    <div className='max-md:hidden'>
                    <Button onClick={sortByRating}
          label="Rating"
          iconURL={sort}
          bgColor={'bg-white'}
          />

                    </div>

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