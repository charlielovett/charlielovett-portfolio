import React from 'react';
import alcoholImg from '../public/assets/projects/303-2.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&#39;ve Built</h2>
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