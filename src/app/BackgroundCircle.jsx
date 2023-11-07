'use client'

import React from 'react'
import {motion} from 'framer-motion'
const BackgroundCircle = () => {
  return (
      <motion.div
          initial={{
              opacity: 0,
          }}
          animate={{
              scale: [1, 2, 2, 3, 1],
              opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
              borderRadius:['20','20','50','80','20'],
          }}
          transition={{
              duration:2.5,
          }}
          className='relative
    flex justify-center items-center'>
          <div className='absolute border border-[#6b6b6b] rounded-full h-[200px] w-[200px] mt-52
          animate-ping'/>
          <div className='absolute border border-[#9e9e9e] rounded-full h-[200px] w-[150px] mt-52 animate-spin' />
          <div className='absolute border border-[#333333] rounded-full h-[200px] w-[100px] mt-52 animate-spin'/>
          <div className='absolute border border-[#333333] rounded-full h-[200px] w-[100px] mt-52 animate-ping' />
          <div className='rounded-full border-[#333333] opacity-20 h-[650px] w-[650px]
          absolute mt-52 animate-pulse'/>
          {/* <div className='rounded-full border border-[#676767] h-[500px] w-[500px] absolute mt-52' /> */}
    </motion.div>
  )
}

export default BackgroundCircle
