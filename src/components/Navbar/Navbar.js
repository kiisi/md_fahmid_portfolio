import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="max-wrapper">
        <nav className="nav">
            <div className="nav-header">Fahmid<span className="material-icons">bolt</span></div>
            <div className="nav-links">
                <div className="nav-links-item">Home</div>
                <div className="nav-links-item">About</div>
                <div className="nav-links-item">Skills</div>
                <div className="nav-links-item">Contact</div>
            </div>
            <div className="nav-menu-icon">
            <span className="material-icons">menu</span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar