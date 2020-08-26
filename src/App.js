import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe';
import EducationAndSkills from './components/EducationAndSkills';

function App() {
  return (
    <div className="App row">
      <div className="col-3 ">
        <NavigationBar />
      </div>
      <div className="col-9">
        <AboutMe />
        <EducationAndSkills />
      </div>
    </div>
  );
}

export default App;
