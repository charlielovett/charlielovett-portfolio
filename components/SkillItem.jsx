import React from 'react'

const SkillItem = ({skill, skillIcon}) => {
  return (
    <div className='p-6 rounded-xl border border-gray-300 hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            {skillIcon}
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>{skill}</h3>
                        </div>
                    </div>
                </div>
  )
}

export default SkillItem