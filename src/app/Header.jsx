'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  return (
    
      <header className='sticky top-0 p-2  flex items-start justify-between  max-w-7xl  mx-auto z-20 xl:items-center'>
      
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale:1,
        }}
        transition={{
          duration:1.5,
        }}
        className='flex flex-row items-center w-5 cursor-pointer text justify-between '>
      
       
       
            
          <img className='mr-2' src='./youtube.jpg' alt='youtube.js' />
      
       
        
          <img className='mr-2' src='./facebook.jpg' alt='facebook.js' />
          
        
         
           <img className='mr-2' src='./tweet.jpg' alt='tweet.js' />
        
       
        
           <img src='./telegrame.jpg' alt='telegrame.js' />
        
       
      </motion.div>
      <Link href='#contact'>
      
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale:1,
        }}
        animate={{
         x:0,
          opacity: 1,
         scale:1,
        }}
        transition={{duration:1.5}}
        className='flex flex-row items-center text-gray-300 cursor-pointer '>
        <img src='enviloop.png' alt='enviloop.js' className='w-5' />

        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 '>get in tourch</p>
      </motion.div>
      </Link>
     </header>
    
  )
}

export default Header
