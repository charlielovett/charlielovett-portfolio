import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



const ProjectItem = ({projUrl, title, description, icons, projImage}) => {
    return (
        <Link href={projUrl}>
            <div className='relative flex flex-col items-left justify-center h-auto w-full rounded-xl p-4 scale-[.98] hover:scale-[1] hover:cursor-pointer transition-transform duration-100 border border-gray-300 group'>
                <h3>{title}</h3>
                <p className='py-2 text-gray-600'>{description}</p>
                    <div className='flex'>
                        {icons.map((Icon, index) => (
                            <Icon key={index} className='mx-1' size={25} />
                        ))}
                        </div>
                <Image className='w-full rounded-xl my-3'
                    src={projImage}
                    alt='/'
                    />
                <p>See more &rarr;</p>
                <div className='w-full h-1 bg-gradient-to-r from-cl-orange to-cl-yellow scale-x-0 group-hover:scale-x-100 transform origin-left ease-in duration-300'></div>
                </div>
            </Link>
    )
  }
export default ProjectItem