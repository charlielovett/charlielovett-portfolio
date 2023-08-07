import React from 'react';
import alcoholImg from '../public/assets/projects/303-2.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2> <span className='bg-gradient-to-r from-[#FFB939] to-[#f9ec5f] text-black'>Projects </span></h2>
            <p className='py-2 text-gray-600'>Showcase of my work in software development and data analysis.</p>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem
                    title='Alcohol Data Analysis'
                    backgroundImg={alcoholImg}
                    projectUrl='/alcohol'
                    method='Python'
                />
                <ProjectItem
                    title='Alcohol Data Analysis'
                    backgroundImg={alcoholImg}
                    projectUrl='/alcohol'
                    method='Python'
                />
                <ProjectItem
                    title='Alcohol Data Analysis'
                    backgroundImg={alcoholImg}
                    projectUrl='/alcohol'
                    method='Python'
                />
                <ProjectItem
                    title='Alcohol Data Analysis'
                    backgroundImg={alcoholImg}
                    projectUrl='/alcohol'
                    method='Python'
                />


            </div>
        </div>
    </div>
  )
}

export default Projects