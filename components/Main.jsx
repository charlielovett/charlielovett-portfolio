import React, { useState, useEffect, } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { TbSourceCode } from 'react-icons/tb';

const linkedInLink = 'https://linkedin.com/in/charlie-lovett';
const gitHubLink = 'https://github.com/charlielovett';

const Main = () => {
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 400); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                        I&#39;m Charlie, a senior at Northwestern University studying computer science
                        and data science. I&#39;m passionate about developing software that makes an impact,
                        whether through intuitive user experiences or scalable, data-driven solutions.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href={linkedInLink} target='_blank'>
                            <div className='rounded-full ring-4 ring-cl-orange m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn size={20} />
                            </div>
                        </a>
                        <a href={gitHubLink} target='_blank'>
                            <div className='rounded-full ring-4 ring-cl-orange m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub size={20} />
                            </div>
                        </a >
                        <a href='mailto:colovett@gmail.com' target='_blank'>
                            <div className='rounded-full ring-4 ring-cl-orange m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail size={20} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <a
                href='https://github.com/charlielovett/charlielovett-portfolio'
                target='_blank'
                className='absolute font-semibold left-4 bottom-4 group'>
                {smallScreen ? (
                    <TbSourceCode size={30}></TbSourceCode>
                ) : (
                    <>
                        Source Code
                        <div
                            className='w-full h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0
                            group-hover:scale-x-100 transform origin-left ease-in duration-100'></div>
                    </>
                )}
            </a>
        </div>
    )
}

export default Main