'use client'

import React from 'react'
import { motion } from 'framer-motion'
 
  const Project = ( ) => {
  const Project = [1, 2, 3, 4, 5]
    length = (true);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:1.5}}
      
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-10 uppercase tracking-[28px] text-gray-500 text-2xl'>
          Project
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ABBA]/80'>
       
          { Project.map((Project,i) => (
         <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
         items-center justify-center p-5 md:p-44 h-screen'>
           <motion.img 
                 className='w-31 h-36 cursor-pointer'
                 initial={{
                   y:-300,
                  opacity:0,
                 }}
                 transition={{ duration: 1.2 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{once:true}}
             
                 src='./phonee.jpg' alt='phonee.js' />
         
           <motion.img  
               className='w-31 h-36 cursor-pointer ' 
               initial={{
             y:300,
              opacity:0,
             }}
             transition={{ duration: 1.2 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{once:true}}
         
             src='./phonee.jpg' alt='phonee.js' />
       
             
           
      
             <div className='space-y-2 px-0 md:px-5 max-w-3xl'>
              <h4 className='text-lg font-semibold text-center text-gray-400'>
                  Case Study {i + 1} of {Project.length}:{ '' }UPS Clone</h4>
                <p className='text-sm+ text-center md:text-left text-gray-400 '>
                  pe values have been proposed in different forums, such as add, remove, move-up
                  pe values have been proposed in different forums, such as add, remove, move-up
                </p>``
             </div>
          </div>
            
          ))}

        

    </div>


      <div className='w-full absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[200px] -skew-y-12' />
      


    </motion.div>
  )
}

export default Project
