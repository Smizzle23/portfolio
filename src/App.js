import React from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import AboutBottom from './components/About/AboutBottom';
import Skills from './components/Skills/Skills';
import SkillsBottom from './components/Skills/SkillsBottom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App () {

    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
          {/* A B O U T */}
          <Route exact path="/" render={props=> (
            <React.Fragment>
              <About />
              <AboutBottom />
            </React.Fragment>
          )} />
          {/* S K I L L S */}
          <Route exact path="/skills" render={props=> (
            <React.Fragment>
              <div style={{display: 'flex', margin: 'auto', padding: '1em', justifyContent: 'space-between', width: '1500px'}}>
                  <Skills />
              </div>
              <SkillsBottom />
            </React.Fragment>
          )} />
        {/* W O R K */}
          <Route exact path="/work" render={props=> (
            <React.Fragment>
              <About />
              <AboutBottom />
            </React.Fragment>
          )} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
