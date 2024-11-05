import React from 'react';
import ProjectPage from '@/components/ProjectPage';

import bashImg from '../public/projects/bashEx.png';

import { SiGnubash } from 'react-icons/si';

const repoLink = 'https://github.com/charlielovett/bash-schedules.git';
const presLink = '';

const links = [
    { href: repoLink, text: 'Repository' },
    { href: presLink, text: 'Presentation' },
];

const customBullets = (
    <div>
        <p>Technologies Used: Bash Scripting and core Unix utilties</p>
    </div>
);

const overview = `The Schedule Visualizer project was created with a clear goal: 
to gain practical experience using Bash, a powerful and ubiquitous tool in 
software engineering. Recognizing Bash's versatility and its frequent use 
in automating tasks, managing systems, and enhancing productivity, I wanted 
to dive deep into scripting and learn how to leverage Bash for real-world applications.\n
Through this project, I explored fundamental concepts in Bash scripting, such as 
manipulating command-line input, formatting output into tables, and handling time-based data. 
Building a visual schedule from scratch challenged me to think critically about data 
representation and to understand how shell commands can be combined effectively. 
This hands-on experience has made me more confident in using Bash for future software 
engineering endeavors, from task automation to more complex system interactions.`;

const alcohol = () => {
    return (
        <ProjectPage
            image={bashImg}
            title='Bash Schedule Visualizer'
            snippet={'A bash script that displays a visual table of schedules for each day of the week.'}
            links={links}
            overview={overview}
            icons={[SiGnubash]}
            overrideBullets={customBullets}
        >
        </ProjectPage>
    )
}

export default alcohol