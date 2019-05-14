import React, { useContext, useEffect } from 'react';
import {
    Link,
} from 'react-router-dom';

import Context from '../../context';


export default function Step1() {
    let FormObject = useContext(Context);
    console.log("Context: ", FormObject);

    let step1 = FormObject.step1;

    function onClick() {
        FormObject.current.setState("step1");
        FormObject.step1.setState("step1:true");
    }

    useEffect(()=> {
        FormObject.current.setState("step1");
    },[])

    return (
        <div className="form step">
            <h1>
                Step 1
            </h1>
            <Link onClick={() => onClick()} to="/form">Back</Link>
            {"  >"}

            <Link onClick={() => onClick()} to="/form/step2">Goto Step 2</Link>
        </div>

    )
}