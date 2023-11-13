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
    max-w-full justify-evenly mx-auto  items-center z-0'>
      <h3 className='absolute top-10 uppercase tracking-[28px] text-gray-500 text-2xl'>
          Project
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ABBA]/80'>
       
          { Project.map((Project,i) => (
         <div className='w-screen flex-shrink-0 snap-center flex flex-col 
         items-center justify-center  md:p-44 '>
           <motion.img 
                 className='w-5 h-10 cursor-pointer'
                 initial={{
                   y:-300,
                  opacity:0,
                 }}
                 transition={{ duration: 1.2 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{once:true}}
             
                 src='./OIP (3).jpg' alt='phonee.js' />
         
           <motion.img  
               className=' cursor-pointer ' 
               initial={{
             y:300,
              opacity:0,
             }}
             transition={{ duration: 1.2 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{once:true}}
         
             src='./OIP (3).jpg' alt='phonee.js' />
       
             
           
      
             <div className='space-y-2 px-0 md:px-5 max-w-3xl '>
              <h4 className='text-lg font-semibold text-center  text-gray-400 '>
                  Video downloader {i + 1} of {Project.length}:{ '' }software</h4>
                <p className='text-sm text-center md:text-left text-gray-400 p-7  '>
                 Hire me in you company for eny type of project ,you can get lead on above amazing and most powerful web ,mobile and desktop application together with great securities
                </p>
             </div>
          </div>
            
          ))}

        

    </div>


      <div className='w-full absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[200px] -skew-y-12' />
      


    </motion.div>
  )
}

export default Project
