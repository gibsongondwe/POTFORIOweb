'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ExperienceCardtwo from './ExperienceCardtwo'
const WorkExperience = () => {
  return (
      <motion.div
         initial={{
       opacity:0
      }}
      whileInView={{opacity:1}}
  
      transition={{
        duration:1.5,
      }}
          
         className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
          max-w-full  px-10  justify-evenly mx-auto items-center'  
      
      >

       
 <h3 className='absolute top-10 uppercase tracking-[10px] text-gray-300 text-1xl'>Experience</h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-13 snap-x snap-mandatory
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ABBA]/80 '>
            
        <ExperienceCard />
        <ExperienceCardtwo/>
        <ExperienceCard />
              
          </div>

      </motion.div>
     
  )
}

export default WorkExperience