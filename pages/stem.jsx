import Image from 'next/image';
import React from 'react';
import stemImg from '../public/assets/projects/303-3.png';
import Link from 'next/link';

const repoLink = 'https://github.com/charlielovett/Predicting-STEM-Salaries.git';
const presLink = 'https://docs.google.com/presentation/d/e/2PACX-1vR-4NR9pHnv8dQl5Jctpgf9dvfzmBmHkJSt-Yagy5W_4wlyi3US7ktWXHFuA4tfIae9MnqyJykX9mDR/pub?start=false&loop=false&delayms=3000';


const stem = () => {
  return (
      <div className='max-w-[1240px] mx-auto p-8 pt-[50px] lg:px-[100px]'>
        <Image
          className=''
          src={stemImg}
          alt='/'
          />
        <div>
          <h1>STEM Salary Model</h1>
          <p className='py-2 text-gray-600 text-sm'>An ensemble of models which predict employee salaries in STEM fields based on a variety of predictors.</p>
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
              target='_blank'
              className='text-gray-750 w-auto group'>
                Presentation
                <div className='h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0 group-hover:scale-x-100 transform origin-left ease-in duration-300'></div>
              </a>
          </div>
          <hr className='my-4'></hr>
          <h2>Overview</h2>
          <p className='py-2'>This project focuses on the development of a model to
          predict salaries in STEM fields. In this project, the optimization metric
          used was Mean Absolute Error. An MAE on testing data of ~47,000 was achieved
          using the following models and ensembling techniques- Ridge, Lasso, Random
          Forest, AdaBoost, Gradient Boosting, and XGBoost. Based on this model,
          stakeholders including students and employers can more accurately predict
          salaries to correctly value work and avoid overcompensating employees.</p>
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

export default stem