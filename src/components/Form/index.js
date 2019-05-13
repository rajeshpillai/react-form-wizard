import React, { useState } from 'react';
import Context from '../../context';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';


import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';


export default function Form() {
    const [step1, setStep1] = useState("");
    const [step2, setStep2] = useState("");
    const [step3, setStep3] = useState("");

    const FormObject = {
        step1: {
            value: step1,
            setState: setStep1
        },
        step2: {
            value: step2,
            setState: setStep2
        },
        step3: {
            value: step3,
            setState: setStep3
        },
    }

    return (
        <Context.Provider value={FormObject}>
            <Router>
                <div className="form">
                    <h1>
                        Form Wizard <br />
                        <div>{FormObject.step1.value}</div>
                        <div>{FormObject.step2.value}</div>
                        <div>{FormObject.step3.value}</div>

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