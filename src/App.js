import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import AboutBottom from './components/About/AboutBottom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
          <Route exact path="/" render={props=> (
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
}

export default App;
