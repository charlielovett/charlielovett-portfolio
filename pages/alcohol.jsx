import React from 'react';
import ProjectPage from '@/components/ProjectPage';

import alcImg from '../public/projects/303-2.png';

import { FaPython } from 'react-icons/fa';
import { SiPandas, SiNumpy} from 'react-icons/si';

const repoLink = 'https://github.com/charlielovett/Alcohol-Mortality-Model.git';
const presLink = 'https://docs.google.com/presentation/d/e/2PACX-1vQA_P3N8A9SAr6l1HHQQk4sHpgTId-OXeEey16nM3CJhfdDpOGtapUhHalYw04-TtfaKsf2eRacolVR/pub?start=false&loop=false&delayms=3000';

const links = [
  { href: repoLink, text: 'Repository' },
  { href: presLink, text: 'Presentation' },
];

const bulletItems = [
  'Python: An easy-to-learn language for data science; countless libraries for data manipulation, cleaning, and analysis',
  'Pandas: A widely-used Python library built for data manipulation and analysis.',
  'NumPy: A Python library built for large, multidimensional arrays with many mathematical functions to operate on those arrays.',
  'Matplotlib and Seaborn: Python data visualization libraries.'
];

const alcohol = () => {
  return (
    <ProjectPage
      image = {alcImg}
      title = 'Alcohol Mortality Model'
      snippet = {'A logistic regression model which assesses global alcohol-attributable ' +
        'mortality rates. Final project for STAT 303-2 at Northwestern University.'}
      links = {links}
      overview = {'This project\’s goal was to build a model that will be able to '+
                  'identify if a country is at a high risk for having too many deaths '+
                  'attributable to alcohol (as a proportion of total deaths). We sought '+
                  'to optimize the model\’s classification accuracy, along with its '+
                  'false negative rate. To test the metrics, we used 10-fold cross validation. '+
                  'The final model was developed using forward selection with interactions '+
                  'between some predictors. Check out the GitHub repository for a more '+
                  'in-depth report of the project.'}
      icons = {[FaPython, SiPandas, SiNumpy]}
      bullets = {bulletItems}
      >

    </ProjectPage>
  )
}

export default alcohol