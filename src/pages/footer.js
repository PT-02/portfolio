import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink as Link } from 'react-router-dom';
import "./footer.css";
import developer from "./images/developer.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="col">
          <div className="footer-about">
            <h3 className="name">~Prerna</h3>
            <img src={developer} alt="developer" />
          </div>

          <div className="pageLink">
            <ul>
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about_page" activeClassName="active">
                  About
                </Link>
              </li>
              <li>
                <Link to="/project" activeClassName="active">
                  Project
                </Link>
              </li>
              <li>
                <Link to="/email" activeClassName="active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>
              Say Hello <span></span>🙋‍♀️
            </h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://www.instagram.com/__shutterbug02" target="_blank" rel="noreferrer">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/prerna-tanwar-52318a19a/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn className="icons" />
                </a>
              </div>
              <div>
                <a href="https://github.com/PT-02" target="_blank" rel="noreferrer">
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom--section">
          <p>
            @2023 Prerna | <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
