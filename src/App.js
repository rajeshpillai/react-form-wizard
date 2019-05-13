import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Context from './context';


import Form from './components/Form';
import Step1 from './components/Form/step1';
import Step2 from './components/Form/step2';
import Step3 from './components/Form/step3';



class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: '0 auto' }}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/form'>Form</Link></li>
          </ul>
          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />

          <Route path='/form' component={Form} />

        </div>
      </Router>

    )
  }
}

export default App;
