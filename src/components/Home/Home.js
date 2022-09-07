import React from 'react'
import About from './About/About'
import Connect from './Connect/Connect'
import Hero from './Hero/Hero'
import RunDown from './RunDown/RunDown'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Skillset from './Skillset/Skillset'
import Experience from './Experience/Experience'
const Home = () => {
  return (
    <>
        <Hero/>
        <Skills/>
        <RunDown/>
        <About/>
        <Projects/>
        <Skillset/>
        <Experience/>
        <Connect/>
    </>
  )
}

export default Home