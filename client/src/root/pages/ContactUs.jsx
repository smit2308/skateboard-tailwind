import React from 'react'
import contactus from '../../assets/images/banner/contactus.jpg'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'


const ContactUs = () => {

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
        
<section className='max-container items-center    '>
            <div className='mt-32 max-sm:mt-24 mx-20 max-sm:mx-6  flex lg:flex-row flex-col-reverse rounded-3xl justify-center overflow-hidden   shadow-xl border bg-slate-100 '>
            
                <img src={contactus} alt='contact us' className=' lg:w-1/2 lg:h-[700px] object-cover   transition-all duration-300  cursor-pointer max-md:filter max-md:grayscale hover:grayscale-0' />
            
          
                <form className='w-full p-10 max-sm:p-4 flex  flex-col  lg:gap-10 gap-6   items-center justify-center' onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1 className='text-2xl lg:text-4xl font-palanquin font-bold  text-left '>
                    Get In Touch
                    </h1>
                    <input className='text-start border-2 border-gray-200 rounded-xl p-2 text-lg font-montserrat w-full ' type="email" placeholder="Email" {...register("email", { required: true })} />
                    <textarea className='text border-2 border-gray-200 rounded-xl p-2 text-lg font-montserrat h-60 w-full '  placeholder="Message" {...register("Message", { required: true })}   
                    />

                    {loading ? (
                        <Loader />) : (<Button
                            label={"Submit"}
                            iconURL={false}
                            width={'full'}
                        />)}

                                

                    </form>
                    <DevTool control={control} />
                    
            </div>
 
            </section>   
    )
}

export default ContactUs