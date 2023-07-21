import React from "react";
import "./project.css";
import { FaGithub} from "react-icons/fa";
import pr1 from "./images/pr1.png";
import pr2 from "./images/pr2.png";
import laptop from './images/laptop.png'
import Footer from "./footer";

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
              <img src={pr1} alt="Avatar" />
            </div>
            <div class="flip-card-back">  </div>
            <div className="flip-text">            
              <a href="https://github.com/No-ShitSherlock/fridayfoodpoint-master.git" target="_blank">
                  <FaGithub className="icons" />
                </a>
            
            </div>
          </div>
        </div>
            </div>
            <div className="right">
            <img className="laptop2" src={laptop} alt="laptop"/>
            <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={pr2} alt="Avatar" />
            </div>
            <div class="flip-card-back">  </div>
            <div className="flip-text">            
            <a href="https://github.com/PT-02/Event-Website.git" target="_blank">
                  <FaGithub className="icons" />
                </a>
            
            </div>
          </div>
        </div>
            </div>
        
        
      </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectPage;
