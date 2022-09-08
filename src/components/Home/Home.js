import React from 'react'
import About from './About/About'
import Connect from './Connect/Connect'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Skillset from './Skillset/Skillset'
import Experience from './Experience/Experience'
import Achievements from './Achievements/Achievements'
const Home = () => {
  return (
    <>
        <Hero/>
        <Skills/>
        <About/>
        <Projects/>
        <Skillset/>
        <Experience/>
        <Achievements/>
        <Connect/>
    </>
  )
}

export default Home