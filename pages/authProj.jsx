import React from 'react';
import ProjectPage from '@/components/ProjectPage';

import authImg from '../public/projects/nextAuth.png';

import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoFirebase } from 'react-icons/bi'

const repoLink = 'https://github.com/charlielovett/nextjs-auth.git';
const demoLink = 'https://drive.google.com/file/d/1Tpv78J36yxRcjh_MF04fE2tds9DeDBMC/view?usp=sharing';

const links = [
  { href: repoLink, text: 'Repository' },
  { href: demoLink, text: 'Demo' },
];

const bulletItems = [
  'Next.js: This React framework optimizes server-side rendering and static website generation.',
  'Firebase: Authentication is one of many backend services that Google\'s Firebase has available.'
];

const overview = `As preparation for building more sophisticated web applications with Next.js 
I wanted to familiarize myself with authorization. This very simple app allows users to log into 
their account with Google.`

const authProj = () => {
  return (
    <ProjectPage
        image={authImg}
        title='Next.js Authentication'
        snippet = 'A simple Next.js app that uses Firebase to allow users to log in and view their private profile page.'
        links = {links}
        overview = {overview}
        icons = {[TbBrandNextjs, BiLogoFirebase]}
        bullets = {bulletItems}
      >

    </ProjectPage>
  )
}

export default authProj