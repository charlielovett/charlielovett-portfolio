import React from 'react';
import ProjectCard from '../components/ProjectCard';

/*images*/
import bashImg from '../public/projects/bash.png';
import alcoholImg from '../public/projects/303-2.png';
import stemImg from '../public/projects/303-3.png';
import authImg from '../public/projects/nextAuth.png';
import calcImg from '../public/projects/calc.png';


/*icons*/
import { FaPython } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScikitlearn, SiGnubash } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoFirebase, BiLogoHtml5, BiLogoCss3, BiLogoJavascript } from 'react-icons/bi';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-8'>
        <h1 className='pt-[100px]'> <span className='bg-gradient-to-r from-cl-orange to-cl-yellow text-black'>Projects</span></h1>
        <p className='py-4 text-gray-600'>Showcase of my work in software development and data analysis.</p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>

          <ProjectCard
            title='Schedule Visualizer'
            description={'A Bash script that displays a visual table of schedules for each day of the week.'}
            projImage={bashImg}
            icons={[SiGnubash]}
            projUrl='/bashProj'
          />

          <ProjectCard
            title='Effects of Alcoholism | Data Analysis'
            description={'A logistic regression model which assesses global alcohol-attributable mortality rates. ' +
              'Final project for STAT 303-2 at Northwestern University.'}
            projImage={alcoholImg}
            icons={[FaPython, SiPandas, SiNumpy]}
            projUrl='/alcoholProj'
          />

          <ProjectCard
            title='STEM Salaries | Data Analysis'
            description={'Prediction model using Ridge, Lasso, Random Forest, AdaBoost, Gradient Boost, ' +
              'and XGBoost. Final project for STAT 303-3 at Northwestern University.'}
            projImage={stemImg}
            icons={[FaPython, SiScikitlearn, SiPandas, SiNumpy]}
            projUrl='/stemProj'
          />

          <ProjectCard
            title='Next.js Authentication'
            description='A simple Next.js app that uses Firebase to allow users to log in and view their private profile page.'
            projImage={authImg}
            icons={[TbBrandNextjs, BiLogoFirebase]}
            projUrl='/authProj'
          />

          <ProjectCard
            title='Calculator App'
            description='My very first project with HTML, CSS, and JavaScript.'
            projImage={calcImg}
            icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript]}
            projUrl='/calcProj'
          />

        </div>
      </div>
    </div>
  )
}

export default Projects