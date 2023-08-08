import Image from 'next/image';
import React from 'react';
import alcoholImg from '../public/assets/projects/303-2.png';
import Link from 'next/link';

const alcohol = () => {
  return (
      <div className='max-w-[1240px] mx-auto p-8 pt-[50px] lg:px-[100px]'>
        <Image
          className=''
          src={alcoholImg}
          alt='/'
          />
        <div>
          <h1>Alcohol Mortality Model</h1>
          <p className='py-2 text-gray-600 text-sm'>A logistic regression model which assesses global alcohol-attributable mortality rates. Final project for STAT 303-2 at Northwestern University.</p>
          <div className='flex items-center'>
            <a
              href='/'
              target='_blank'
              className='underline underline-offset-4 decoration-dotted text-gray-750 w-auto group hover:no-underline'>
                Repository
                <div className='h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0 group-hover:scale-x-100 transform origin-left ease-in duration-300'></div>
              </a>
            <div className='px-8 text-gray-750'>
              &bull;
            </div>
            <a
              href='/'
              target='_blank'
              className='underline underline-offset-4 decoration-dotted text-gray-750 w-auto group hover:no-underline'>
                Presentation
                <div className='h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0 group-hover:scale-x-100 transform origin-left ease-in duration-300'></div>
              </a>
          </div>
          <hr className='my-4'></hr>
          <h2>Overview</h2>
          <p className='py-2'>This is a description of the project This is a description
            of the project This is a description of the project This is
            a description of the project This is a description of the 
            project This is a description of the project This is a description
            of the project This is a description of the project</p>
          <h2>Technologies</h2>
          <ul className='py-2'>
            <li>Python</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>Seaborn</li>
            <li>Matplotlib</li>
          </ul>
        </div>
        
        <Link href='/projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
  )
}

export default alcohol