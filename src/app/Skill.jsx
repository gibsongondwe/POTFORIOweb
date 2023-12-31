'use client'

import React from 'react'
import { motion } from 'framer-motion'


const Skill = (directionLeft) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity:0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='./download (9).jpg' alt='project.js' 
        className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-30
        xl:h-30 filter group-hover:grayscale transition duration-300 easy-in-out '
      
      />
     
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
      easy-in-out group-hover:bg-white h-20 w-20 md:w-20 xl:w-30 xl:h-30
      rounded-full z-0'>
        
        <div className='flex items-center justify-center h-full'>
          {/* <p className='text-3xl font-bold text-black opacity-100'>100%</p> */}
          <p className='text-3xl font-bold text-gray-600 opacity-100'>Click</p>
        </div>
       
      </div>
      
    </div>
  )
}

export default Skill