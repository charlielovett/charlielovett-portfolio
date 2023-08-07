import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const linkedInLink = 'https://linkedin.com/in/charlie-lovett';
const gitHubLink = 'https://github.com/charlielovett';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('white');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    useEffect(() => {
        if (
            router.asPath === '/alcohol' ||
            router.asPath === '/alcohol' ||
            router.asPath === '/alcohol' ||
            router.asPath === '/alcohol'
        ) {
            setNavBg('transparent');
            setLinkColor('white');
        } else {
            setNavBg('white');
            setLinkColor('#1f2937');
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav)
    }

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
        style={{backgroundColor: `${navBg}`}}
        className={
            shadow
                ? 'fixed w-full h-20 shadow-xl z-[100]'
                : 'fixed w-full h-20 z-[100]'
        }
    >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
                <Image
                    src="/../public/assets/navbar-logo.png"
                    alt="/"
                    width='125'
                    height='50'
                />
            </Link>
            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex pr-4'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden pr-4'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
            className={
                nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
        >
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
                    <Link href='/about'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link href='/projects'>
                        <li onClick={()=>{setNav(false)}} className='py-4 text-sm'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
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
    </div>
    </div>
  )
}

export default Navbar