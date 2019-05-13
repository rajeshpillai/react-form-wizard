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


const FormObject = {
  data: {

  },
  methods: {
    update(data) {
      console.log(data);
      alert('hi');
    }
  }
}
class App extends Component {
  render() {
    return (
      <Context.Provider value={FormObject}>
        <Router>
          <div style={{ width: 1000, margin: '0 auto' }}>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/form'>Form</Link></li>
            </ul>
            <hr />

            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />

            <Route exact path='/form' component={Form} />
            <Route path='/form/step1' component={Step1} />
            <Route path='/form/step2' component={Step2} />
            <Route path='/form/step3' component={Step3} />
          </div>
        </Router>
      </Context.Provider>

    )
  }
}

export default App;
