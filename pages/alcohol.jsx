import React from 'react';
import ProjectPage from '@/components/ProjectPage';

import alcImg from '../public/assets/projects/303-2.png';
import { FaPython } from 'react-icons/fa';
import { SiPandas, SiNumpy} from 'react-icons/si';

const repoLink = 'https://github.com/charlielovett/Alcohol-Mortality-Model.git';
const presLink = 'https://docs.google.com/presentation/d/e/2PACX-1vQA_P3N8A9SAr6l1HHQQk4sHpgTId-OXeEey16nM3CJhfdDpOGtapUhHalYw04-TtfaKsf2eRacolVR/pub?start=false&loop=false&delayms=3000';

const links = [
  { href: repoLink, text: 'Repository' },
  { href: presLink, text: 'Presentation' },
];

const bulletItems = [
  'Python: An easy-to-learn language for data science &#8212; countless libraries for data manipulation, cleaning, and analysis',
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
      overview = {'This project focuses on the development of a model to ' +
                  'predict salaries in STEM fields. In this project, the optimization metric ' +
                  'used was Mean Absolute Error. An MAE on testing data of ~47,000 was achieved '+
                  'using the following models and ensembling techniques- Ridge, Lasso, Random ' +
                  'Forest, AdaBoost, Gradient Boosting, and XGBoost. Based on this model, ' +
                  'stakeholders including students and employers can more accurately predict ' +
                  'salaries to correctly value work and avoid overcompensating employees.'}
      icons = {[FaPython, SiPandas, SiNumpy]}
      bullets = {bulletItems}
      >

    </ProjectPage>
  )
}

export default alcohol