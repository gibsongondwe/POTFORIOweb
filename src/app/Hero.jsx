'use client'
import react from 'react'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link'

import { Cursor,useTypewriter } from 'react-simple-typewriter';
const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
    'Hi !,My Name is Gibson Gondwe',
     'Hire me on the most expressive project in your company',
     'Am a full stack developer',
    '<react,c++,c and many more java script language/>'
  ],
loop: true,
    delaySpeed:2000,
});

return (
  <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircle />
    <img
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
      src='./gibooo.png' alt='gibooo.js' />
    
    <div className='z-20'>
      <h2
        className='text-sm uppercase text-gray-200 pd-2 tracking-[10px]'
      >Software  Engineering</h2>
      <p className='text-white'>{text}</p>
   
      <div className=' mt-5'>
        <Link href='#about'>
         <button className='heroButton'>About</button>
        </Link>

        <Link href='#experience'>
        <button className='heroButton'>Experience</button>
        </Link>
       

        <Link href='#skills'>
        <button className='heroButton'>Skills</button>
        </Link>
        <Link href='#project'>
         <button className='heroButton'>Project</button>
        </Link>
        <Link href='#contact'>
         <button className='heroButton'>Contact</button>
        </Link>
       
       
      </div>
    </div>
   

   </div>   
);
  }
  
  export default Hero