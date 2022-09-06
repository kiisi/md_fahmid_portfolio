import React from 'react'
import './RunDown.css'

const RunDown = () => {
    return (
        <div className="max-wrapper rundown-wrapper">
            <div className="rundown">
                    <div className="rundown-counter">
                        <div className="rundown-counter-content">
                            <h1>11+</h1>
                            <h2>Happy Clients</h2>
                        </div>
                    </div>
                    <div className="rundown-counter">
                        <div className="rundown-counter-content">
                            <h1>18+</h1>
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <div className="rundown-counter">
                        <div className="rundown-counter-content">
                            <h1>5+</h1>
                            <h2>Skillsets</h2>
                        </div>
                    </div>
                    <div className="rundown-counter">
                        <div className="rundown-counter-content">
                            <h1>6+</h1>
                            <h2>Experience</h2>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default RunDown