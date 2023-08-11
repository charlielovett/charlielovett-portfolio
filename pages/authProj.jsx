import React from 'react';
import ProjectPage from '@/components/ProjectPage';

import authImg from '../public/assets/projects/nextAuth.png';

import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoFirebase } from 'react-icons/bi'

const repoLink = 'https://github.com/charlielovett/nextjs-auth.git';
const demoLink = '/';

const links = [
  { href: repoLink, text: 'Repository' },
  { href: demoLink, text: 'Demo' },
];

const bulletItems = [
  'Next.js: This React framework optimizes server-side rendering and static website generation.',
  'Firebase: Authentication is one of many backend services that Google\'s Firebase has available.'
];

const authProj = () => {
  return (
    <ProjectPage
        image={authImg}
        title='Next.js Authentication'
        snippet = 'A simple Next.js app that uses Firebase to allow users to log in and view their private profile page.'
        links = {links}
        overview = {'As preparation for building more sophisticated web applications with Next.js I wanted '+
                    'to familiarize myself with authorization. This very simple app allows users to log into '+
                    'their account with Google.'}
        icons = {[TbBrandNextjs, BiLogoFirebase]}
        bullets = {bulletItems}
      >

    </ProjectPage>
  )
}

export default authProj