import React from 'react'
import './about.css'
import Footer from "./footer";


function AboutPage(){
    return(
        <>
        <div className='about'>   
        <div className='container'>     
          <div className='left'>
            <h2>An Engineering Student</h2>
            <p>Passionate engineering student seeking innovative solutions. Proficient in <span>problem-solving, critical thinking, and technical skills</span> . Dedicated to continuous learning and staying updated with emerging technologies. Excited to contribute to challenging projects and make a positive impact in the world.</p>
           
             
          </div>
          <div className='right'>
          <h2>A Frontend Developer</h2>
          <p>Talented frontend developer with a knack for creating visually appealing and user-friendly websites. Skilled in <span>HTML, CSS, JavaScript, ReactJs </span>with a keen eye for design and attention to detail. Committed to delivering high-quality code ,and crafting seamless user experiences. Eager to collaborate and bring digital ideas to life.</p>
          

          </div>
          </div>

        </div>
        <Footer />
        </>
    );
};

export default AboutPage