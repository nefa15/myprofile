import React from 'react';
import './Skills.css';
import Htmllogo from './html5.jpg';
import Csslogo from './CSS3.jpg';
import Jslogo from './javascript.jpg';
import Reactlogo from './React JS Training in Chandigarh.jpg';
import Bootstraplogo from './Bootstrap.jpg';
import Sql from './SQL.jpg';
import Vscode from './Visual Studio Code Logo PNG.jpg';
import mysql from './mysql.jpg';
import Git from './GitHub.jpg';
import Frontenddevelopement from './Get my art printed on awesome products_ Support me….jpg';
import maya from './Maya Logo.jpg';
import blender from './Blender Logo.jpg';

const Skills = () => (
  <div>
    <h2 className="commonhead">Things I code with</h2>
    <p className="center-content" id='pararesume'>I leverage these skills to craft high-quality code that delivers exceptional results.</p>
    <div className="skills">
      <img src={Htmllogo} alt='html' className='logosize' />
      <img src={Csslogo} alt='css' className='logosize' />
      <img src={Jslogo} alt='javascript' className='logosize' />
      <img src={Reactlogo} alt='react' className='logosize' />
      <img src={Bootstraplogo} alt='bootstrap' className='logosize' />
      <img src={Sql} alt='sql' className='logosize' />
      <img src={mysql} alt='mysql' className='logosize' />
      <img src={Git} alt='git' className='logosize' />
      <img src={Vscode} alt='vscode' className='logosize' />
      <img src={Frontenddevelopement} alt='frontend' className='logosize' />
      <img src={maya} alt='maya' className='logosize' />
      <img src={blender} alt='blender' className='logosize' />
    </div>
  </div>
);

export default Skills;
