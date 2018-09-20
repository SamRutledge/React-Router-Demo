import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home.js'
import Candidate from './components/candidate.js'
import About from './components/about.js'

class App extends Component {
  render() {
    return (
      <div className="App"> 

      <BrowserRouter>
        <div>

          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/candidate" component={Candidate} />
            <Route path="/about" component={About} />

          </Switch>

        </div>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
