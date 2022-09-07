import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <div className="max-wrapper">
            <div className="experience">
                <div className="experience-header">
                    <p>EXPERIENCE</p>
                    <h1>FAHMID EXPERIENCE</h1>
                </div>
                <div className="experience-logistics">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Lyft Back-End Engineering Virtual Experience
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <h2>Problem Solving:</h2>
                                    Using my problem-solving skills, I was able to develop full-stack web applications that processed, analyzed, and displayed large amounts of data.
                                    <h2>Creativity:</h2>
                                    With the help of Lyft team I had to design and implement software to create new rental fleet in an effort to promote more sustainable, linked cities across the US.
                                    <h2>Organization:</h2>
                                    I had to make sure all my code are organized and commented so that my partners can use. And that code are useable and more readable by my fellow coders or whoever will reference my code later on.
                                    <h2>Time Frame</h2>
                                    8 months
                                    Jan 2022 - Aug 2022
                                    Volunteering
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience