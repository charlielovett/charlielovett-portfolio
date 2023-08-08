import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const linkedInLink = 'https://linkedin.com/in/charlie-lovett';
const gitHubLink = 'https://github.com/charlielovett';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&#39;m <span className='bg-gradient-to-r from-cl-orange to-cl-yellow'>Charlie</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Student and Software Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a student and Northwestern University studying 
                    computer science and data science. Currently, I am 
                    focused on expanding my programming skillset while 
                    building a responsive web application which will manage 
                    and track events on Northwestern&#39;s campus.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href={linkedInLink} target='_blank'>
                        <div className='rounded-full ring-4 ring-cl-orange m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn size={20}/>
                        </div>
                    </a>
                    <a href={gitHubLink} target='_blank'>
                        <div className='rounded-full ring-4 ring-cl-orange m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub size={20}/>
                        </div>
                    </a > 
                    <a href='mailto:colovett@gmail.com' target='_blank'>
                        <div className='rounded-full ring-4 ring-cl-orange m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={20}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main