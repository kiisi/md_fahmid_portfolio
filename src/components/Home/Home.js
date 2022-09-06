import React from 'react'
import About from './About/About'
import Connect from './Connect/Connect'
import Hero from './Hero/Hero'
import RunDown from './RunDown/RunDown'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Skillset from './Skillset/Skillset'
const Home = () => {
  return (
    <>
        <Hero/>
        <Skills/>
        <RunDown/>
        <About/>
        <Projects/>
        <Skillset/>
        <Connect/>
    </>
  )
}

export default Home