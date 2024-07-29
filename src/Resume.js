import React from 'react';
import './App.css';

const Resume = () => (
  <div id='res'>
    <h1 className='commonhead'>About Me</h1><br></br><br></br><br></br>
    <h2 className="multi-colored" id="wish">Hi, I'm Neelophar Kona</h2><br></br>
    <h4 className="multi-colored" id="wish1" >Frontend React Js Developer</h4>
    
    <p className="center-content" id='pararesume'>I am a dedicated frontend developer focused on crafting seamless and engaging user experiences. With proficiency in transforming lines of code into visually appealing interfaces, I excel at balancing design and functionality. My expertise includes HTML5, CSS3, JavaScript, Bootstrap, and SQL with MySQL. I specialize in creating interactive web applications using frameworks such as React.js. I am committed to developing responsive, dynamic, and user-centric web solutions, leveraging the latest web technologies to deliver high-quality, optimized code.</p>
    <p className="d-flex justify-content-center" style={{ fontSize: 30 }}>
      <a href="https://docs.google.com/document/d/1lBia1zZ5qQXcPOEwNatyheJ99sOzjMRCJrNhxAeURvU/edit?usp=drive_link"  target="_blank" rel="noopener noreferrer" className="button-link">
        Download Resume 
      </a>
    </p>
  </div>
);

export default Resume;
