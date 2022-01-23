import React from 'react'
import './App.css'
import NavigationBar from './components/navigationBar'
import AboutMe from './components/AboutMe.jsx'
import EducationAndSkills from './components/EducationAndSkills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Achievements from './components/Achievements.jsx'

function App() {
  return (
    <div className="container-fluid">
      <div className="App row">
        <div className="col-12 col-lg-3 d-lg-block d-none">
          <NavigationBar />
        </div>
        <div className="col-lg-9 col-12 pb-5">
          <AboutMe />
          <EducationAndSkills />
          <Achievements />
          <Portfolio />
        </div>
      </div>
    </div>
  )
}

export default App
