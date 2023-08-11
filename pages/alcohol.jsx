import Image from 'next/image';
import React from 'react';
import alcImg from '../public/assets/projects/303-2.png';
import Link from 'next/link';
import {FaPython} from 'react-icons/fa';
import { SiPandas, SiNumpy} from 'react-icons/si';

const repoLink = 'https://github.com/charlielovett/Alcohol-Mortality-Model.git';
const presLink = 'https://docs.google.com/presentation/d/e/2PACX-1vQA_P3N8A9SAr6l1HHQQk4sHpgTId-OXeEey16nM3CJhfdDpOGtapUhHalYw04-TtfaKsf2eRacolVR/pub?start=false&loop=false&delayms=3000';

const icons=[FaPython, SiPandas, SiNumpy]

const alcohol = () => {
  return (
      <div className='max-w-[1240px] mx-auto p-8 pt-[50px] lg:px-[100px]'>
        <Image
          className=''
          src={alcImg}
          alt='/'
          />
        <div>
          <h1>Alcohol Mortality Model</h1>
          <p className='py-2 text-gray-600 text-sm'>A logistic regression model which assesses global alcohol-attributable mortality rates. Final project for STAT 303-2 at Northwestern University.</p>
          <div className='flex items-center'>
            <a
              href={repoLink}
              target='_blank'
              className='text-gray-750 w-auto group'>
                Repository
                <div className='h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0 group-hover:scale-x-100 transform origin-left ease-in duration-300'></div>
              </a>
            <div className='px-8 text-gray-750'>
              &bull;
            </div>
            <a
              href={presLink}
              alt="/"
              target="_blank">
                Presentation
                <div className='h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0 group-hover:scale-x-100 transform origin-left ease-in duration-300'></div>
              </a>
          </div >
          <hr className='my-4'></hr>
          <div className='flex flex-row'>
            <div className='h-auto w-2 bg-gradient-to-b from-cl-orange to-cl-yellow'></div>
            <h2 className='pl-2'>Overview</h2>
          </div>
          <p className='py-4 leading-8'>This project focuses on the development of a model to
          predict salaries in STEM fields. In this project, the optimization metric
          used was Mean Absolute Error. An MAE on testing data of ~47,000 was achieved
          using the following models and ensembling techniques- Ridge, Lasso, Random
          Forest, AdaBoost, Gradient Boosting, and XGBoost. Based on this model,
          stakeholders including students and employers can more accurately predict
          salaries to correctly value work and avoid overcompensating employees.</p>
          <div className='flex flex-row'>
            <div className='h-auto w-2 bg-gradient-to-b from-cl-orange to-cl-yellow'></div>
            <h2 className='pl-2'>Technologies</h2>
          </div>
          <div className='flex m-3'>
            {icons.map((Icon, index) => (
              <Icon key={index} className='mx-1' size={30} />
              ))}
            </div>
          <div className='m-4 leading-8'>
            <p>This model project uses a range of technologies, including:</p>
            <ul class="list-disc text-black ml-8 mt-4">
              <li>
                Python: An easy-to-learn language for data science &#8212; countless
                libraries for data manipulation, cleaning, and analysis
                </li>
              <li>
                Pandas: A widely-used Python library built for data manipulation and
                analysis.
                </li>
              <li>
                NumPy: A Python library built for large, multidimensional arrays with
                many mathematical functions to operate on those arrays.
                </li>
              <li>
                Matplotlib and Seaborn: Python data visualization libraries.
                </li>
              </ul>
          </div>
        </div>
        
        <Link href='/projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
  )
}

export default alcohol