import React from 'react';
import ProjectPage from '@/components/ProjectPage';

import stemImg from '../public/projects/303-3.png';

import { FaPython } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScikitlearn } from 'react-icons/si';

const repoLink = 'https://github.com/charlielovett/Predicting-STEM-Salaries.git';
const presLink = 'https://docs.google.com/presentation/d/e/2PACX-1vR-4NR9pHnv8dQl5Jctpgf9dvfzmBmHkJSt-Yagy5W_4wlyi3US7ktWXHFuA4tfIae9MnqyJykX9mDR/pub?start=false&loop=false&delayms=3000';

const links = [
  { href: repoLink, text: 'Repository' },
  { href: presLink, text: 'Presentation' },
];

const bulletItems = [
  'Python: An easy-to-learn language for data science; countless libraries for data manipulation, cleaning, and analysis',
  'scikit-learn: A comprehensive machine learning library built for Python. It features various classification and regression algorithms that we used.',
  'Pandas: A widely-used Python library built for data manipulation and analysis.',
  'NumPy: A Python library built for large, multidimensional arrays with many mathematical functions to operate on those arrays.',
  'Matplotlib and Seaborn: Python data visualization libraries.'
];

const stem = () => {
  return (
    <ProjectPage
      image = {stemImg}
      title = 'STEM Salary Model'
      snippet = {'An ensemble of models which predict employee salaries in STEM fields based on a variety of predictors.'}
      links = {links}
      overview = {'This project focuses on the development of a model to ' +
                  'predict salaries in STEM fields. In this project, the optimization metric '+
                  'used was Mean Absolute Error. An MAE on testing data of ~$47,000 was achieved '+
                  'using the following models and ensembling techniques- Ridge, Lasso, Random '+
                  'Forest, AdaBoost, Gradient Boosting, and XGBoost. Based on this model, '+
                  'stakeholders including students and employers can more accurately predict '+
                  'salaries to correctly value work and avoid overcompensating employees'}
      icons = {[FaPython, SiScikitlearn, SiPandas, SiNumpy]}
      bullets = {bulletItems}
      >

    </ProjectPage>
  )
}

export default stem