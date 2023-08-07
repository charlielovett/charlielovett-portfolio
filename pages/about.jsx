import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h2 className='pt-[100px]'> <span className='text-black'>About</span></h2>
                <h2 className='py-2'> <span className='bg-gradient-to-r from-[#FFB939] to-[#f9ec5f] text-black'>Charlie Lovett</span></h2>
                <p className='py-4 text-gray-600'>
                    This is a paragraph explaining who I am. How I got into programming,
                    where I am in school, my interests, hobbies, plans, and projects.
                    </p>
                </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='w-full rounded-xl'
                    src='/../public/assets/about-me.png'
                    alt='/'
                    width='1000'
                    height='1000'/>
            </div>
        </div>
    </div>
  )
}

export default About