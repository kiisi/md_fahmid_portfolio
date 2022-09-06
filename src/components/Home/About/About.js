import React from 'react'
import './About.css'
import coding1 from '../../Images/programmerImg2.svg'


const About = () => {
    return (
        <div className="max-wrapper about-wrapper">
            <div className="about">
                <div className="about-header">
                    <p>MORE INFO</p>
                    <h1>ABOUT MD FAHMID </h1>
                </div>
                <div className="about-content-wrapper">
                    <div className="about-content">
                        <div className="about-contact-card">
                            <p><span>Name:</span> Md Fahmid Chowdhury</p>
                        </div>
                        <div className="about-contact-card">
                            <p><span>Date Of Birth:</span> 07-22-2002 </p>
                        </div>
                        <div className="about-contact-card">
                            <p><span>Career:</span> Software Engineer and Data Analyst</p>
                        </div>
                    </div>
                    <div className="about-content-img">
                        <img src={coding1} alt="coding"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About