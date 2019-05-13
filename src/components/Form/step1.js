import React, { useContext } from 'react';
import {
    Link,
} from 'react-router-dom';

import Context from '../../context';


export default function Step1() {
    let FormObject = useContext(Context);
    console.log("Context: ", FormObject);
    function onClick() {
        FormObject.methods.update({
            "step1": true
        })
    }

    return (
        <div className="step2">
            <h1>
                Step 1
            </h1>
            <Link onClick={() => onClick()} to="/form/step2">Step 2</Link>
        </div>

    )
}