import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
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
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>
              Say Hello <span></span>🙋‍♀️
            </h3>
            <div className="footer-social--icons">
              <div>
                <a href="" target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="" target="_blank">
                  <FaLinkedinIn className="icons" />
                </a>
              </div>
              <div>
                <a href="" target="_blank">
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
