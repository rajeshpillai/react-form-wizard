import React from 'react';
import Context from '../../context';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';


import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

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

export default function Form() {
    return (
        <Context.Provider value={FormObject}>
            <Router>
                <div className="form">
                    <h1>
                        Form Wizard
                 </h1>
                    <Link to="/form/step1">Step 1</Link>
                    <div className="router-outlet">
                        <Route path='/form/step1' component={Step1} />
                        <Route path='/form/step2' component={Step2} />
                        <Route path='/form/step3' component={Step3} />
                    </div>
                </div>
            </Router>
        </Context.Provider>

    )
}