import React from 'react';
import ProjectPage from '@/components/ProjectPage';

import calcImg from '../public/projects/calc.png';

import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript } from 'react-icons/bi';

const repoLink = 'https://github.com/charlielovett/calculator-app.git';
const demoLink = 'https://drive.google.com/file/d/13lEjJiYjmoHgDE8fd0uZdHr8wZxmTuSx/view?usp=sharing';

const links = [
  { href: repoLink, text: 'Repository' },
  { href: demoLink, text: 'Demo' },
];

const bulletItems = [
  'HTML: The standard markup language for web browser documents.',
  'CSS: The standard style sheet language used for describing the presentation of markup language documents.',
  'JavaScript: One of the core technologies of the internet. 98.7% of websites use JavaScript on the client side for webpage behavior.',
];

const overview = `For the most part, my school's computer science strays away from 
web development. The exposure I've had to web development and the languages that revolve 
around it is very limited. Therefore, I taught myself HTML, CSS, and JavaScript in order 
to jumpstart my application development journey. After that, I needed a real project 
to continue to develop my skills, so I built a simple calculator.`

const calcProj = () => {
  return (
    <ProjectPage
      image={calcImg}
      title='Calculator App'
      snippet='My very first project with HTML, CSS, and JavaScript.'
      links={links}
      overview={overview}
      icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript]}
      bullets={bulletItems}
    >

    </ProjectPage>
  )
}

export default calcProj