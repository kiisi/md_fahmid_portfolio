import React, { useState, useRef } from 'react'
import './Navbar.css'

const Navbar = () => {


  const [click, setClick] = useState(false)
  const mobileNavRef = useRef()
  const mobileNavCloseRef = useRef()

  const menuHandler = () => {
    setClick(!click)
    let mobileNav = mobileNavRef.current
    let mobileNavClose = mobileNavCloseRef.current


    mobileNav.classList.remove("nav-slide-effect-out")
    mobileNav.classList.add("nav-slide-effect-in")
    mobileNav.addEventListener('animationend', () => {
      mobileNav.style.right = '0';
      mobileNavClose.classList.add('show')
    })



  }

  const closeHandler = () => {
    setClick(!click)
    let mobileNav = mobileNavRef.current
    let mobileNavClose = mobileNavCloseRef.current


    mobileNavClose.classList.remove('show')

    mobileNav.classList.remove("nav-slide-effect-in")
    mobileNav.classList.add("nav-slide-effect-out")
    mobileNav.addEventListener('animationend', () => {
      mobileNav.style.right = '-40rem';
      mobileNavClose.classList.remove('show')

    })
  }

  return (
    <>
      <div className="max-wrapper">
        <nav className="nav">
          <div className="nav-header">Fahmid<span className="material-icons">bolt</span></div>
          <div className="nav-links">
            <div className="nav-links-item"><a href="#about">About</a></div>
            <div className="nav-links-item"><a href="#skills">Skills</a></div>
            <div className="nav-links-item"><a href="#projects">Projects</a></div>
            <div className="nav-links-item"><a href="#connect">Connect</a></div>
          </div>
          <div className="nav-menu-icon" onClick={menuHandler}>
            <span className="material-icons">menu</span>
          </div>
        </nav>
      </div>

      <nav className="mobile-nav" ref={mobileNavRef}>
        <div className="mobile-nav-close-wrapper">
          <div className="mobile-nav-close" onClick={closeHandler} ref={mobileNavCloseRef}>
            <span className="material-icons">close</span>
          </div>
        </div>
        <div className="mobile-nav-content">
          <div className="nav-header mobile-nav-header">
            Fahmid<span className="material-icons">bolt</span>
          </div>
          <div className="mobile-nav-menu">
            <div><a href="#about">About</a></div>
            <div><a href="#skills">Skills</a></div>
            <div><a href="#projects">Projects</a></div>
            <div><a href="#connect">Connect</a></div>
          </div>
        </div>
      </nav>
      <div className="nav-modal" style={{ display: click ? 'block' : 'none' }} onClick={closeHandler}></div>

    </>
  )
}

export default Navbar