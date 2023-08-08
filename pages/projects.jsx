import React from 'react';
import ProjectItem from '../components/ProjectItem';

{/*images*/}
import alcoholImg from '../public/assets/projects/303-2.png';
import stemImg from '../public/assets/projects/303-3.png';


{/*icons*/}
import { FaPython } from 'react-icons/fa';
import { SiPandas } from 'react-icons/si';
import { SiNumpy } from 'react-icons/si';
import { SiScikitlearn } from 'react-icons/si';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto sm:px-16 px-8'>
            <h1 className='pt-[100px]'> <span className='bg-gradient-to-r from-cl-orange to-cl-yellow text-black'>Projects</span></h1>
            <p className='py-4 text-gray-600'>Showcase of my work in software development and data analysis.</p>
            <div className='grid md:grid-cols-3 gap-8'>

                <ProjectItem
                    title='Alcohol-Related Mortality | Data Analysis'
                    description={'A logistic regression model which assesses global alcohol-attributable mortality rates. Final project for STAT 303-2 at Northwestern University.'}
                    projImage={alcoholImg}
                    icons={[FaPython, SiPandas, SiNumpy]}
                    projUrl='/alcohol'
                    />
                
                <ProjectItem
                    title='STEM Salaries | Data Analysis'
                    description={'Prediction model using Ridge, Lasso, Random Forest, AdaBoost, Gradient Boost, and XGBoost. Final project for STAT 303-3 at Northwestern University.'}
                    projImage={stemImg}
                    icons={[FaPython, SiPandas, SiNumpy, SiScikitlearn]}
                    projUrl='/alcohol'
                    />

            </div>
        </div>
    </div>
  )
}

export default Projects