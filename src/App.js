import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <a className="d-none d-md-block" href="https://github.com/ngocle61">
      <img className="github-link" src="https://aral.github.com/fork-me-on-github-retina-ribbons/left-red@2x.png" alt="github"/>
      </a>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
