import react from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import WorkExperience from './WorkExperience'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
// import Image from 'next/image'

// import Link from 'next/link'


export default function Home() {


  return (
    <div>
   
    <div className='bg-[rgb(36,36,36)] text-write h-screen snap-y sna-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ABBA]/80 scrollbar-hidden '>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero/>
       </section>

      <section id='about' className='snap-center'>
          <About/>
      </section>scr

      <section id='experience' className='snap-start'>
        <WorkExperience/>
       
      </section>

      <section id='skills' className='snap-start'>
         <Skills />
      </section>

      <section id='project' className='snap-start'>
          <Project />
      </section>
      
      <section id='contact' className='snap-start'>
      <Contact/>
        </section>
        

       
      </div>
     
   
           
    </div>
    
  )
}
