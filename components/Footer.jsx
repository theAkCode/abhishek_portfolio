import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20' id='footer'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.plogo2 : assets.plogo1} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          abhishekkrbtw@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p> CONNECT WITH ME </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/theAkCode">Github</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/abhishek-kumar-20090b221/">LinkedIn</a></li>
          <li><a target='_blank' href="https://www.instagram.com/abhishek__btw/">Instagram</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
