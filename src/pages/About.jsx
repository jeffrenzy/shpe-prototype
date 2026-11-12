import React from 'react';
import './About.css';
import hero_img from '../assets/hero_placeholder.png'; 

const PLACEHOLDER_IMG_1 = "https://images.pexels.com/photos/36729525/pexels-photo-36729525.jpeg";
const PLACEHOLDER_IMG_2 = "https://images.pexels.com/photos/19875873/pexels-photo-19875873.jpeg";

function About() {
  return (
    <>
        <div className="banner">
            <h1>
                About USC SHPE
            </h1>
        </div>
        <img src={PLACEHOLDER_IMG_1} alt="cool pic of us" className="long-pic" />
        <div className='placeholder-paragraph'>
            <p>
                This is the best club ever. We make friends and eat food together. Cool companies want to hire us all the time.

            </p>
        </div>
        <div className="banner">
            <h1>The Numbers</h1>
        </div>
        <div className='brag-container'>
            <div className="brag-block">
                <h1>Num</h1>
                <h3>Thingy</h3>
            </div>
            <div className="brag-block">
                <h1>Num</h1>
                <h3>Thingy</h3>
            </div>
            <div className="brag-block">
                <h1>Num</h1>
                <h3>Thingy</h3>
            </div>
        </div>
        <ul className="brag-list">
            <li>
            Award for best chapter in the states
            <br />
            Calicity, California
            </li>
            <li>
            Award for best chapter in the states
            <br />
            Calicity, California
            </li>
            <li>
            Award for best chapter in the states
            <br />
            Calicity, California
            </li>
            <li>
            Award for best chapter in the states
            <br />
            Calicity, California
            </li>
        </ul>
        <div className="banner">
            <h1>SHPE as Familia</h1>
        </div>
        <div className="four-pic-row">
            <img src={PLACEHOLDER_IMG_2} alt="" /> 
            <img src={PLACEHOLDER_IMG_2} alt="" /> 
            <img src={PLACEHOLDER_IMG_2} alt="" /> 
            <img src={PLACEHOLDER_IMG_2} alt="" />
        </div>
        <div className='placeholder-paragraph centered-text'>
            These are nice pictures of the familia bonding together. We are very happy.
        </div>
    </>
  );
}

export default About;