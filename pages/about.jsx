import React from 'react'
import Image from 'next/image'
import aboutImg from '../public/aboutMe.png';

const linkedInLink = 'https://linkedin.com/in/charlie-lovett';
const gitHubLink = 'https://github.com/charlielovett';


const About = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-8'>
            <h2 className='pt-[100px]'> <span className='text-black'>About</span></h2>
            <h1 className='py-2'> <span className='bg-gradient-to-r from-cl-orange to-cl-yellow text-black'>Charlie Lovett</span></h1>
            <div className='mt-4 mb-8'>
                <Image
                    className='float-right ml-6 w-40 md:w-72 rounded-md'
                    src={aboutImg}
                    alt='Photo of Me'
                />
                <article>
                    <p className='text-gray-600 leading-8'>
                    Hi! My name is Charlie Lovett. I am a Senior at Northwestern University studying
                    computer science and data science. My programming journey began in my freshman year:
                    I decided to take an intro CS class, and I immediately fell in love with the subject.
                    </p>
                    <br/>
                    <p className='text-gray-600 leading-8'>
                    During my sophomore year, I collaborated with the Tech and Analysis Committee of the Northwestern University
                    Dance Marathon team to develop a mobile app for their annual fundraiser. This experience introduced me to app
                    development using React Native, and it made me realize just how much there is to learn in the expansive field
                    of computer science. Building this website with Next.js was my first solo programming project outside of school
                    or extracurricular activities. The freedom to create something on my own and learn independently deepened my passion
                    for software development.
                    </p>
                    <br/>
                    <p className='text-gray-600 leading-8'>
                    Since then, through both internship experiences and personal projects, I have developed a solid foundation
                    in frontend software development, utilizing popular technologies such as Vue.js, TypeScript, and Tailwind CSS.
                    </p>
                    <br />
                    <p className='text-gray-600 leading-8'>
                    If you would like to know more about me, please feel free to check out my&nbsp;
                    <a
                        className='font-semibold text-gray-800 underline'
                        href={linkedInLink}
                        target='_blank'>LinkedIn</a>
                    &nbsp;or&nbsp;
                    <a
                        className='font-semibold text-gray-800 underline'
                        href={gitHubLink}
                        target='_blank'>GitHub</a>
                    !</p>
                    <br/>
                </article>
            </div>
        </div>
    );
  };

export default About