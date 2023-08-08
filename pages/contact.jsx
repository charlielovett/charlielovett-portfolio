import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto w-full sm:px-16 px-8'>
            <h1 className='pt-[100px]'> <span className='bg-gradient-to-r from-cl-orange to-cl-yellow text-black'>Contact</span></h1>
            <div className='grid lg:grid-cols-5 gap-8 pt-8'>
{/*left*/}
                <div className='col-span-3 lg:col-span-2 w-full border border-gray-300 lg:h-1/2 rounded-xl p-4'>
                    <div className='flex flex-col h-full justify-between lg:p-4 rounded-xl'>
                        <div className='flex-grow'>
                            <h2 className='py-2'>Charlie Lovett</h2>
                            <p className='py-4'>You can reach me by email at colovett@gmail.com or the following form</p>
                        </div>
                        <div className='bottom-div'>
                            <p className='uppercase pt-8'>Connect with me</p>
                            <div className='flex items-left py-4 space-x-8'>
                                <div className='rounded-full ring-4 ring-cl-orange p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full ring-4 ring-cl-orange p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full ring-4 ring-cl-orange p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/*right*/}    
                <div className='col-span-3 w-full h-auto border border-gray-300 rounded-xl mb-4 lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type="text"/>
                                </div>

                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type="text"/>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type="email"/>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type="email"/>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                                </div>

                            </div>
                            <button className='w-full p-4 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact