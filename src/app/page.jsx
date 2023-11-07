import react from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import WorkExperience from './WorkExperience'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import BestExperience from './BestExperience'
import Link from 'next/link'


export default function Home() {


  return (
   
    <div className='bg-[rgb(36,36,36)] text-write h-screen snap-y sna-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ABBA]/80 '>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero/>
       </section>

      <section id='about' className='snap-center'>
          <About/>
      </section>

      <section id='experience' className='snap-start'>
        <WorkExperience/>
       
      </section>

      {/* <section id='best' className='snap-start'>
        <BestExperience/>
       
      </section> */}

      <section id='skills' className='snap-start'>
         <Skills />
      </section>

      <section id='project' className='snap-start'>
          <Project />
      </section>
      
      <section id='contact' className='snap-start'>
      <Contact/>
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='text-center items-center justify-center'                                                                                                                                     ame='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='./OIP (10).jpg' alt='OIP (10)' />
            <div>
              <h3 className='text-sm text-gray-500'>Back</h3>
            </div>
          </div>
        </footer>
      </Link>
   
           
   </div>
  )
}
