import React, { useContext } from 'react';
import {
    Link,
} from 'react-router-dom';

import Context from '../../context';


export default function Step2() {
    let FormObject = useContext(Context);
    console.log("Context: ", FormObject);

    function onClick() {
        FormObject.step2.setState("step2:true");
    }

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