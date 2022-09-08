import React from 'react'
import './Hero.css'
import heroImg from '../../Images/heroImg.jpg';
import Typewriter from 'typewriter-effect';

const Hero = () => {

    

    return (
        <div className="max-wrapper hero-wrapper">
            <div className="hero">
                <div className="hero-content-wrapper">
                    <div className="hero-content">
                        <div className="hero-content-m">
                            <div className="hero-content-m-1">
                                <span className="material-icons">bolt</span>
                            </div>
                            <p>SPEED UP<br />COMMUNICATIONS</p>
                        </div>
                        <div className="hero-content-l">
                            <div className="hero-content-l-1">
                                <h1>Hi I'm Md Fahmid Chowdhury</h1>
                            </div>
                            <div className="hero-content-l-2">
                                <h2><span>A </span><Typewriter
                                        options={{
                                            strings: ['Software Engineer', 'Front End Developer', 'Data Analyst'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>
                            </div>
                            <div className="hero-content-l-3">
                                <p>A software engineer 6+ years of proven leadership and meaningfully contributed to teams of varying size and scopes.</p>
                            </div>
                            <div className="hero-content-l-btn">
                                <div className="btn-l">
                                <a href="mailto:fahmidchowhury@gmail.com">Hire Me</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image">
                        <img src={heroImg} alt="hero_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
