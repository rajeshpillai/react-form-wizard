import React, { useContext, useEffect } from 'react';
import {
    Link,
} from 'react-router-dom';

import Context from '../../context';


export default function Step1() {
    let FormObject = useContext(Context);
    console.log("Context: ", FormObject);

    const {setState} = FormObject.current;

    function onClick() {
        setState("step1");
    }

    useEffect(()=> {
        setState("step1");
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