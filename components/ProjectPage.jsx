import Image from 'next/image';
import React from 'react';

const ProjectPage = ({image, title, snippet, links, repoLink, isPres, presLink, isDemo, demoLink, overview, icons, bullets}) => {
  return (
      <div className='max-w-[1240px] mx-auto p-8 pt-[50px] lg:px-[100px]'>

        <Image
          className=''
          src={image}
          alt='/'
          />
        <div>
            <h1>{title}</h1>
            <p className='py-2 text-gray-600 text-sm'>{snippet}</p>

        {/* Links */}
            <div className='flex items-center space-x-4'>
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        <a
                        href={link.href}
                        target='_blank'
                        className='text-gray-750 w-auto group flex items-center'>
                            {link.text}
                            <div className='h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0
                            group-hover:scale-x-100 transform origin-left ease-in duration-300'></div>
                        </a>
                        {index < links.length - 1 && (
                            <div className='px-8 text-gray-750'>&bull;</div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <hr className='my-4'></hr>

                {/* Overview */}
            <div className='flex flex-row'>
                <div className='h-auto w-2 bg-gradient-to-b from-cl-orange to-cl-yellow'></div>
                <h2 className='pl-2'>Overview</h2>
            </div>
            <p className='py-4 leading-8'>{overview}</p>

            {/* Technologies */}
            <div className='flex flex-row'>
                <div className='h-auto w-2 bg-gradient-to-b from-cl-orange to-cl-yellow'></div>
                <h2 className='pl-2'>Technologies</h2>
            </div>
                {/* Icons */}
            <div className='flex m-3'>
                {icons.map((Icon, index) => (
                <Icon key={index} className='mx-1' size={30} />
                ))}
                </div>
                {/* Bullet Points */}
            <div className='m-4 leading-8'>
                <p>This model project uses a range of technologies, including:</p>
                <ul className="list-disc text-black ml-8 mt-4">
                    {bullets.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
            </div>
        </div>
      </div>
  )
}

export default ProjectPage