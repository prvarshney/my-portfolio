import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navigationBar';

function App() {
  return (
    <div className="App row">
      <div className="col-3">
        <NavigationBar />
      </div>
      <div className="col-9">
        Hello, World
      </div>
    </div>
  );
}

export default App;
