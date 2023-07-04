import React from 'react'
import './landing_page.css'
import bg1 from './images/bg.jpg'
import sun from './images/sun.png'
import hill from "./images/hill.png"
import { useEffect } from 'react';
const LandingPage = () => {
    useEffect(() => {
      const handleScroll = () => {
        const bg = document.getElementById('bg');
        const sun = document.getElementById('sun');
        const hill = document.getElementById('hill');
        const text = document.getElementById('text');
  
        const value = window.scrollY;
  
        bg.style.top = `${value * 0.02}rem`;
        sun.style.left= `-${value * 0.5}px`;
        hill.style.top = `${value * 0.0}px`;
        text.style.top = `${value * 1}px`;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
        <div className='main'>       
        <div className='section'>
            <img src={bg1} id="bg" alt='bg'/>
            <img src={sun} id="sun" alt='sun'/>
            <img src={hill} id="hill" alt='hill'/>
            <h2 id="text">I'm Prerna</h2>
        </div>
        </div>
        </>
      );
    };
export default LandingPage