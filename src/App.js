import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <a className="d-none d-md-block" href="https://github.com/ngocle61">
      <img className="github-link" src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="github"/>
      </a>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
