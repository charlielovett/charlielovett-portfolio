import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';

const linkedInLink = 'https://linkedin.com/in/charlie-lovett';
const gitHubLink = 'https://github.com/charlielovett';

const Navbar = () => {
    const [shadow, setShadow] = useState(false);
    const [highlight, setHighlight] = useState('home')
    const router = useRouter();

    useEffect(() => {
        // sets nav highlights
        if (router.asPath === '/') {
            setHighlight('home')
        } else if (router.asPath === '/projects') {
            setHighlight('projects')
        } else if (router.asPath === '/skills') {
            setHighlight('skills')
        } else if (router.asPath === '/about') {
            setHighlight('about')
        } else if (router.asPath === '/contact') {
            setHighlight('contact')
        } else if (router.asPath === '/alcohol') {
            setHighlight('projects')
        }
    }, [router])


    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, [])

  return (
    <div
        className={
            shadow
                ? 'fixed w-full h-20 shadow-xl z-[100] bg-white'
                : 'fixed w-full h-20 z-[100] bg-white'
        }
    >
        <div className='flex justify-between items-center w-full h-full ml-50 scale-90 sm:scale-100'>
            <div>
                <ul className='flex text-black'>
                    <Link href='/'>
                        <li
                            className={
                                (highlight === 'home')
                                ? 'ml-5 text-sm font-semibold bg-gradient-to-r from-cl-orange to-cl-yellow'
                                : 'ml-5 text-sm font-semibold hover:bg-cl-orange/25 ease-in duration-50'
                            }>Home</li>
                    </Link>
                    <Link href='/projects'>
                        <li
                            className={
                                (highlight === 'projects')
                                ? 'ml-5 text-sm font-semibold bg-gradient-to-r from-cl-orange to-cl-yellow'
                                : 'ml-5 text-sm font-semibold hover:bg-cl-orange/25 ease-in duration-50'
                            }>Projects</li>
                    </Link>
                    <Link href='/skills'>
                        <li
                            className={
                                (highlight === 'skills')
                                ? 'ml-5 text-sm font-semibold bg-gradient-to-r from-cl-orange to-cl-yellow'
                                : 'ml-5 text-sm font-semibold hover:bg-cl-orange/25 ease-in duration-50'
                            }>Skills</li>
                    </Link>
                    <Link href='/about'>
                        <li
                            className={
                                (highlight === 'about')
                                ? 'ml-5 text-sm font-semibold bg-gradient-to-r from-cl-orange to-cl-yellow'
                                : 'ml-5 text-sm font-semibold hover:bg-cl-orange/25 ease-in duration-50'
                            }>About</li>
                    </Link>
                </ul>
            </div>
        </div>
    {/* <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
            className='fixed left-[-100%] top-0 p-10 ease-in duration-500'>
            <div>
                <div className='flex w-full items-center justify-between border-b border-gray-300 py-4'>
                    <Link href='/'>
                    <Image 
                        src='/../public/assets/navbar-logo.png'
                        alt='/'
                        width='87'
                        height='35'/>
                    </Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                    <Link href='/'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link href='/projects'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>Projects</li>
                    </Link>
                    <Link href='/skills'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link href='/about'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>About</li>
                    </Link>
                    <Link href='/contact'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>Contact</li>
                    </Link>
                </ul>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5651e5'>Let&#39;s Connect</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href={linkedInLink} target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn size={15}/>
                        </div>
                    </a>
                    <a href={gitHubLink} target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub size={15}/>
                        </div>
                    </a > 
                    <a href='mailto:colovett@gmail.com' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={15}/>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Navbar