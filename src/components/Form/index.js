import React from 'react';
import Context from '../../context';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';


import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';


export default function Form() {
    return (
            <div className="step1">
                <h1>
                    Form
                 </h1>
                <Link to="/form/step1">Step 1</Link>

            </div>

    )
}