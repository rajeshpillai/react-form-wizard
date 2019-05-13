import React, { useContext } from 'react';
import {
    Link,
} from 'react-router-dom';

import Context from '../../context';

export default function Step3() {
    let FormObject = useContext(Context);
    console.log("Context: ", FormObject);

    function onClick() {
        FormObject.step3.setState("step3:true");
    }

    return (
        <div>
            <h1>
                Step 3
      </h1>
            <Link onClick={() => onClick()} to="/form/step2">Back</Link>
        </div>

    )
}