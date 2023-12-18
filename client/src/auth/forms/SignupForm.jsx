import React from 'react'
import Button from '../../components/Button'
import { arrowRight } from '../../assets/icons'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'

export const SignupForm = () => {

  const loading = false;
  const form = useForm();

 

  const { register, control , handleSubmit} = form;

  async function onSubmit(data)
    {
      console.log("Form Submitted", data);
      // const newUser = await createUserAccount(data);
    }
  // create user on submit

  return (

    
    <section className='  flex flex-col lg:gap-10 gap-6 items-center'>
     

        <h1 className='mob:text-[36px] text-3xl font-palanquin font-bold'>Create A New Account</h1>

        <form className=' flex flex-col gap-5 max-w-sm mob:w-full' onSubmit={handleSubmit(onSubmit)} noValidate>

          <input className='border-2 border-gray-300 rounded-full p-2 text-lg font-montserrat ' type="text" placeholder="First Name" {...register("firstName", { required: true })} />
          <input className='border-2 border-gray-300 rounded-full p-2 text-lg font-montserrat ' type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
          <input className='border-2 border-gray-300 rounded-full p-2 text-lg font-montserrat ' type="email" placeholder="Email" {...register("email", { required: true })} />
          <input className='border-2 border-gray-300 rounded-full p-2 text-lg font-montserrat ' type="password" placeholder="Password" {...register("password", { required: true })} />

          {loading? (          
            <Loader />):(<Button  
                label={"Submit"}
                iconURL={false}        
                />)}

          <p className="text-md text-center mt-2 ">Already Have An Account?
            <Link to='/sign-in' className='text-rose-700 font-semibold'> Sign In</Link>
          </p>

          /</form>
          <DevTool control={control} />

      </section>
  )
}
