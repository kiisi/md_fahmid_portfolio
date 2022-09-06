import React from 'react'
import './Skillset.css'
import reactImg from '../../Images/reactImg.svg'
const Skillset = () => {
  return (
    <div className="max-wrapper about-wrapper">
            <div className="skillset">
                <div className="skillset-header">
                    <p>MORE INFO</p>
                    <h1>ABOUT MD FAHMID </h1>
                </div>
                <div className="skillset-content-wrapper">
                    <div className="skillset-content">
                        <div className="skillset-contact-card">
                            <p><span>Name:</span> Md Fahmid Chowdhury</p>
                        </div>
                        <div className="skillset-contact-card">
                            <p><span>Date Of Birth:</span> 07-22-2002 </p>
                        </div>
                        <div className="skillset-contact-card">
                            <p><span>Career:</span> Software Engineer and Data Analyst</p>
                        </div>
                    </div>
                    <div className="skillset-content-img">
                        <img src={reactImg} alt="coding"/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Skillset