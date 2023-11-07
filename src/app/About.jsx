'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import './About.css'


const About = () => {



  return (
    <motion.div
      initial={{
       opacity:0
      }}
      whileInView={{opacity:1}}
  
      transition={{
        duration:1.5,
      }}
      
      className='h-screen flex flex-col relative top-7 text-center md:text-left md:flex-row 
    max-w7xl px-2  justify-center mx-auto items-center text-yellow-50'>
   <h3 className='absolute top-2 uppercase tracking-[20px] text-gray-300 text-1xl '>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity:0,
        }}
        transition={{
          duration:1.2,
        }}
        whileInView={{opacity:1, x: 0 }}
        viewport={{once:true}}
        src='./gibooo.png' alt='gibooo.js'
        className='mb-2 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] mx-2
      '
      />
     <img src='./would.png' className="App-logo" alt='logo' />
      <div className='space-y5 px-0 md:px-5' >
     
        <h3 className='text-1xl mb-1 font-semibold'> Background</h3>
    
        <p className='text-sm mt-1 mb-3 text-gray-400 '>
        


input type="text" name="middlename" id="middlename"
value="Enter your middle name here" 106 P a r t I : C o r e M a r k u p
Hoto supply instructions for the field’s use but rather to supply

        </p>
       
  </div>
      
    </motion.div>
  )
}

export default About