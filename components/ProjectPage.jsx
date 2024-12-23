import Image from 'next/image';
import React from 'react';

const ProjectPage = ({ image, title, snippet, links, overview, icons, bullets, overrideBullets }) => {
    return (
        <div className='max-w-[1240px] mx-auto p-8 pt-[80px] lg:px-[100px]'>
            <div className='w-full aspect-[3/2] mb-5 lg:ml-5 lg:float-right lg:w-[500px] lg:h-[300px] border-[2px] border-black rounded-md flex items-center justify-center overflow-hidden'>
                <Image
                    className='object-cover'
                    src={image}
                    alt='/'
                />
            </div>
            <div>
                <h2>{title}</h2>
                <p className='py-2 text-gray-600 text-sm'>{snippet}</p>

                {/* Links */}
                <div className='flex items-center space-x-4'>
                    {links.map((link, index) => (
                        <React.Fragment key={index}>
                            <a
                                href={link.href}
                                target='_blank'
                                className='pr-3 w-auto group flex items-center font-semibold text-gray-800 underline cursor-pointer'>
                                {link.text}
                            </a>
                            {index < links.length - 1 && (
                                <div className='text-gray-750'>|</div>
                            )}
                            <div className='h-[2px] bg-gradient-to-r from-cl-orange to-cl-yellow'
                            // scale-x-0 group-hover:scale-x-100 transform origin-left ease-in duration-300
                            ></div>
                        </React.Fragment>
                    ))}
                </div>

                <hr className='my-4'></hr>

                {/* Overview */}
                <div className='flex flex-row'>
                    <div className='h-auto w-2 bg-gradient-to-b from-cl-orange to-cl-yellow'></div>
                    <h2 className='pl-2 text-2xl'>Overview</h2>
                </div>
                <p className='py-4 leading-8'>{overview}</p>

                {/* Technologies */}
                <div className='flex flex-row'>
                    <div className='h-auto w-2 bg-gradient-to-b from-cl-orange to-cl-yellow'></div>
                    <h2 className='pl-2 text-2xl'>Technologies</h2>
                </div>
                {/* Icons */}
                <div className='flex m-3'>
                    {icons.map((Icon, index) => (
                        <Icon key={index} className='mx-1' size={30} />
                    ))}
                </div>
                {/* Bullet Points */}
                <div className='m-4 leading-8'>
                    {
                        overrideBullets ? (
                            <div>{overrideBullets}</div>
                        ) : (
                            bullets && bullets.length > 0 && (
                                <div>
                                    <p>This project uses the following technologies:</p>
                                    <ul className="list-disc text-black ml-8 mt-4">
                                        {bullets.map((item, index) => (
                                            <li
                                                className='cursor-default'
                                                key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectPage