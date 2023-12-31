import './globals.css'
import { Inter } from 'next/font/google'
import ReactDOM from 'react-dom'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='text-center items-center justify-center'                                                                                                                                     ame='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full  hover:grayscale-0 cursor-pointer'
              src='./download (4).jpg' alt='OIP (10)' />
           <button className='text-sm text-gray-200 hover:bg-red-200 bg-red-300  rounded pl-6 pr-6 pb-1 pt-1'>
             <h3>Back</h3>
           </button>
         </div>
        </footer>
     </Link>
        </body>
    </html>
  )
}
