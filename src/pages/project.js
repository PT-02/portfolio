import React from "react";
import "./project.css";
import project1 from "./images/project.jpg";
import laptop from './images/laptop.png'

function ProjectPage() {
  return (
    <>
      <div className="project">
        <h1>My Projects</h1>
        <div className="laptop">
            <div className="left">
            <img className="laptop1" src={laptop} alt="laptop"/>
            <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={project1} alt="Avatar" />
            </div>
            <div class="flip-card-back">  </div>
            <div className="flip-text">            
              <p>See full Project</p>
              <a href="/">github</a>
            
            </div>
          </div>
        </div>
            </div>
            <div className="right">
            <img className="laptop2" src={laptop} alt="laptop"/>
            <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={project1} alt="Avatar" />
            </div>
            <div class="flip-card-back">  </div>
            <div className="flip-text">            
              <p>See full Project</p>
              <a href="/">github</a>
            
            </div>
          </div>
        </div>
            </div>
        
        
      </div>
      </div>
    </>
  );
}

export default ProjectPage;
