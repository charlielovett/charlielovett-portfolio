import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>This is a paragraph explaining who I am. How I got into
                    programming, where I am in school, my interests, hobbies,
                    plans, and projects.
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