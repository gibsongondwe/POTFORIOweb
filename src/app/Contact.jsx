import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
 
  // } = useForm()

  // const onSubmit = (data) => console.log(data)

  // console.log(watch("example"))


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md: flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-10 uppercase tracking-[10px] text-gray-300  text-2xl'>
        Contact 
      </h3>
      <div className='flex flex-col space-y-5'>
        <h4 className='text-1xl font-semibold text-center text-gray-500'>
          l have got just what you need {''} lets talk
        </h4>
        <div>
          
          <div className='space-y-2 text-sm'>
            <div className='flex items-center space-x-5 justify-center'>
               <img className='text-[#F7ABBA] h-4 w-4 animate-pulse' src='./phoneh.jpg' alt='phoneh.js' />
            <p className='text-1xl text-gray-500'>+265996651100</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
               <img className='text-[#F7ABBA] h-4 w-4 animate-pulse ' src='./enviloop.png' alt='enviloop.js' />
            <p className='text-1xl text-sm text-gray-500 '>gcgondwe357@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
               <img className='text-[#F7ABBA] h-6 w-6 animate-pulse' src='./mapp.png' alt='map.js' />
            <p className='text-1xl text-gray-500'>Full stack developer</p>
            </div>
            <form className='flex flex-col space-y-2 x-2 py-4 x-4 w-fit mx-auto'>
              <div className='flex space-x-2'>
                  <input placeholder='Name' className='contactInput' type='text' />
                  <input placeholder='Email'  className='contactInput' type='email'/>
              </div>
             <input placeholder='Subject' className='contactInput' type='text'/>
              <textarea placeholder='Massage' className='contactInput' type='text'/>
              <button className='bg-[#cbcb32] py-5 px-5 ml-6 h-13 text-center rounded-md text-black font-bold text-lg  ' type='submit'
               >Submit</button>

          </form>
         
           
          </div>
        </div>
        </div>
 
    </div>
  )
}

export default Contact