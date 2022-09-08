import React from 'react'
import './Skillset.css'
import reactImg from '../../Images/reactImg.svg'
const Skillset = () => {
    return (
        <div className="max-wrapper skillset-wrapper">
            <div className="skillset">
                <div className="skillset-header">
                    <p>SKILLSET</p>
                    <h1>FAHMID SKILLSET</h1>
                </div>
                <div className="skillset-content-wrapper">
                    <div className="skillset-content">
                        <div className="skillset-contact-card">
                            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript" height="40" />
                            <img src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" alt="Github" height="40" />
                            <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" height="40" />
                        </div>
                        <div className="skillset-contact-card">
                            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" alt="Python" height="40" />
                            <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" height="40" />
                            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" alt="Terminal" height="40" />
                        </div>
                        <div className="skillset-contact-card">
                            <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="css" height="40" />
                            <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" height="40" />
                            <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="Html5" height="40" />
                        </div>
                    </div>
                    <div className="skillset-content-img">
                        <img src={reactImg} alt="coding" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skillset