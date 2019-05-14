import React, { useContext, useEffect } from 'react';
import {
    Link,
} from 'react-router-dom';

import Context from '../../context';


export default function Step2() {
    let FormObject = useContext(Context);
    console.log("Context: ", FormObject);

    const {setState} = FormObject.current;

    function onClick() {
        setState("step2");
    }

    useEffect(()=> {
        setState("step2");
    },[])


    return (
        <div className="form step">
            <h1>
                Step 2
      </h1>
            <Link onClick={() => onClick()} to="/form/step1">Back</Link>
            {"  >"}
            <Link onClick={() => onClick()} to="/form/step3">Goto Step 3</Link>
        </div>

    )
}