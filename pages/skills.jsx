import React from 'react';
import SkillItem from '@/components/SkillItem';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoPython, BiLogoTailwindCss, BiLogoReact} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiRstudio } from 'react-icons/si';


'/../public/assets/skills/html.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto sm:px-16 px-8'>
            <h1 className='pt-[100px]'> <span className='bg-gradient-to-r from-[#FFB939] to-[#f9ec5f] text-black'>Skills</span></h1>
            <p className='py-4 text-gray-600'>What I can do.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <SkillItem
                    skill='HTML'
                    skillIcon={<AiFillHtml5 size={50}/>}/>
                <SkillItem
                    skill='CSS'
                    skillIcon={<BiLogoCss3 size={50}/>}/>
                <SkillItem
                    skill='JavaScript'
                    skillIcon={<BiLogoJavascript size={50}/>}/>
                <SkillItem
                    skill='React.js'
                    skillIcon={<BiLogoReact size={50}/>}/>
                <SkillItem
                    skill='Next.js'
                    skillIcon={<TbBrandNextjs size={50}/>}/>
                <SkillItem
                    skill='Python'
                    skillIcon={<BiLogoPython size={50}/>}/>
                <SkillItem
                    skill='R'
                    skillIcon={<SiRstudio size={50}/>}/>
                <SkillItem
                    skill='TailwindCSS'
                    skillIcon={<BiLogoTailwindCss size={50}/>}/>

            </div>
        </div>
    </div>
  )
}

export default Skills