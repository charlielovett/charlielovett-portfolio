import React from 'react';
import SkillItem from '@/components/SkillItem';
import { AiFillHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoPython, BiLogoTailwindCss, BiLogoReact, BiLogoCPlusPlus, BiLogoVuejs } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaJava } from "react-icons/fa6";



'/../public/assets/skills/html.png';

const skillsData = [
    { skill: 'JavaScript', icon: <BiLogoJavascript size={50} /> },
    { skill: 'Python', icon: <BiLogoPython size={50} /> },
    { skill: 'C++', icon: <BiLogoCPlusPlus size={50} /> },
    { skill: 'SQL', icon: <AiOutlineConsoleSql size={50} /> },
    { skill: 'Java', icon: <FaJava size={50} /> },
    { skill: 'Vue.js', icon: <BiLogoVuejs size={50} /> },
    { skill: 'React.js', icon: <BiLogoReact size={50} /> },
    { skill: 'Next.js', icon: <TbBrandNextjs size={50} /> },
    { skill: 'HTML', icon: <AiFillHtml5 size={50} /> },
    { skill: 'CSS', icon: <BiLogoCss3 size={50} /> },
    { skill: 'Tailwind CSS', icon: <BiLogoTailwindCss size={50} /> },
];

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] mx-auto px-8'>
                <h1 className='pt-[100px]'> <span className='bg-gradient-to-r from-cl-orange to-cl-yellow text-black'>Skills</span></h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-8'>
                    {skillsData.map((skillItem, index) => (
                        <SkillItem
                            key={index}
                            skill={skillItem.skill}
                            skillIcon={skillItem.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills