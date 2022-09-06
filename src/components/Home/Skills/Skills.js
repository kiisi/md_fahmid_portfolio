import React from 'react'
import './Skills.css'
import anchor from '../../Images/anchor.svg'
import box from '../../Images/box.svg'
import stack from '../../Images/stack.svg'
const Skills = () => {
    return (
        <div className="max-wrapper">
            <div className="skills">
                <div className="skills-header">
                    <p>SKILLS</p>
                    <h1>MY AREA OF EXPERTISE </h1>
                </div>
                <div className="skills-logistics">
                    <div className="skills-logistics-card">
                        <div className="skills-logistics-card-img">
                            <img src={anchor} alt="anchor" />
                        </div>
                        <div className="skills-logistics-card-caption">
                            <div className="skills-logistics-card-caption-main"><h1>Front-End Developer </h1></div>
                            <div className="skills-logistics-card-caption-sub">Developes the front-end portion of websites and web applications - User Interface</div>
                        </div>
                    </div>
                    <div className="skills-logistics-card">
                        <div className="skills-logistics-card-img">
                            <img src={box} alt="solid" />
                        </div>
                        <div className="skills-logistics-card-caption">
                            <div className="skills-logistics-card-caption-main"><h1>Software Engineer</h1></div>
                            <div className="skills-logistics-card-caption-sub">Designing, writing, evaluating, testing software systems. I also optimize software for speed and scalability.</div>
                        </div>
                    </div>
                    <div className="skills-logistics-card">
                        <div className="skills-logistics-card-img">
                            <img src={stack} alt="box" />
                        </div>
                        <div className="skills-logistics-card-caption">
                            <div className="skills-logistics-card-caption-main"><h1>Data Analyst</h1></div>
                            <div className="skills-logistics-card-caption-sub">Collection and storage of data on sales numbers, market research, logistics or other behaviors.</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills