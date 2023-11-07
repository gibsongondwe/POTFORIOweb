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
        src='./project.jpg' alt='project.js' />
      
      <div className='px-0 md:px-8'>
        <h4 className='text-sm text-1xl font-light text-gray-300'>SOFTWARE ENGINEERING</h4>
        {/* <p className='text-sm text-1xl mt-1 text-gray-300'>JAVASCRIPT DEVELOPER</p> */}
        <div className=' flex space-x-2 my-2 '>
          <img
            className='h-10 w-10 rounded-full'
            src='./OIP (40).jpg' alt='' />
            <img
            className='h-10 w-10 rounded-full'
            src='./OIP (40).jpg' alt='' />
            <img
            className='h-10 w-10 rounded-full'
            src='./OIP (40).jpg' alt=''/>
        
        </div>
        <p className='text-sm uppercase text-gray-300'>Started work...- Ended...</p>
        <ul className='list-disc space-y-2 ml-3 text-gray-300 text-sm '>
          <li className='text-sm mt-2 '>summary pointssummary pointssummary</li>
       

        </ul>
      </div>

    </article>
  )
}

export default ExperienceCard