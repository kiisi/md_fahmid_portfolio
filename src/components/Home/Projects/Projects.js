import React from 'react'
import './Projects.css'
import hoobank from '../../Images/hoobank.jpg'
import fastfood from '../../Images/fastfood.PNG'
import homework from '../../Images/homework.PNG'

const Projects = () => {
  return (
    <div className="max-wrapper">
            <div className="projects">
                <div className="projects-header">
                    <p>PROJECTS</p>
                    <h1>SOME OF MY PROJECTS</h1>
                </div>
                <div className="projects-logistics">
                    <div className="projects-logistics-card">
                        <div className="projects-logistics-card-img">
                            <img src={hoobank} alt="hoobank" />
                        </div>
                        <div className="projects-logistics-card-caption">
                            <div className="projects-logistics-card-caption-main"><h1>HooBank</h1></div>
                        </div>
                    </div>
                    <div className="projects-logistics-card">
                        <div className="projects-logistics-card-img">
                            <img src={fastfood} alt="fastfood" />
                        </div>
                        <div className="projects-logistics-card-caption">
                            <div className="projects-logistics-card-caption-main"><h1>Fast Food</h1></div>
                        </div>
                    </div>
                    <div className="projects-logistics-card">
                        <div className="projects-logistics-card-img">
                            <img src={homework} alt="homework" />
                        </div>
                        <div className="projects-logistics-card-caption">
                            <div className="projects-logistics-card-caption-main"><h1>HomeWorkGuys</h1></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Projects