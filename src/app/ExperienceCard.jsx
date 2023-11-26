'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
  return (
  
    <article className=' 
       flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  h-[400px]
    w-[300px] md:[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden '>
    
      <motion.img
        initial={{
          y: -100,
          opacity:0,
        }}
        transition={{
        duration:1.2
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        
        className='w-20 h-20  rounded-full xl:w-[400px] xl:h-[400px] object-cover object-center
        '
        src='./OIP (5).jpg' alt='project.js' />
      
      <div className='px-0 md:px-8'>
        <h4 className='text-sm text-1xl font-light text-gray-300'>FRONTEND DEVELOPER</h4>
     
        <div className=' flex space-x-2 my-2 '>
          <img
            className='h-10 w-10 rounded-full'
            src='./th (30).jpg' alt='' />
            <img
            className='h-10 w-10 rounded-full'
            src='./th (27).jpg' alt='' />
            <img
            className='h-10 w-10 rounded-full'
            src='./th (31).jpg' alt=''/>
               <img
            className='h-10 w-10 rounded-full'
            src='./download (2).jpg' alt='' />
               <img
            className='h-10 w-10 rounded-full'
            src='./download (5).jpg' alt=''/>
        
        </div>
        <p className='text-sm  text-gray-300'>Experience with above languages</p>
        <ul className='list-disc space-y-2 ml-3 text-gray-300 text-sm '>
          <li className='text-sm mt-2 '>Am a professional javascript developer etc.</li>
       

        </ul>
      </div>

    </article>
  )
}

export default ExperienceCard