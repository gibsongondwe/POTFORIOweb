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
        className='mb-2 md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] mx-2 xl:h-40 xl:w-40
      '
      />
     <img src='./would.png' className="App-logo" alt='logo' />
      <div className='space-y5 px-0 md:px-5' >
     
        <h3 className='text-1xl mb-1 font-semibold'> Background</h3>
    
        <p className='text-sm mt-1 mb-3 text-gray-400 p-5'>

          l have got five years coding experience in javascript with react and next.js. PHP ,JAVA,PYTHON are my extray languages.
          for databases and backend am expat in graphql,mysqli,superbase,firebase and ws amplify for backend project

        </p>
       
  </div>
      
    </motion.div>
  )
}

export default About