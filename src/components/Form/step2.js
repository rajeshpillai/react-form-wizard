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
        <div>
            <h1>
                Step 2
      </h1>
            <Link onClick={() => onClick()} to="/form/step3">Step 3</Link>
        </div>

    )
}