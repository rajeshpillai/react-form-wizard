import React, { useContext, useEffect } from 'react';
import {
    Link,
} from 'react-router-dom';

import Context from '../../context';

export default function Step3() {
    let FormObject = useContext(Context);
    console.log("Context: ", FormObject);

    const { setState } = FormObject.current;

    function onClick() {
        setState("step3");
    }

    useEffect(() => {
        setState("step3");
    }, [setState])

    return (
        <div className="form step">
            <h1>
                Step 3
      </h1>
            <Link onClick={() => onClick()} to="/form/step2">Back</Link>
        </div>

    )
}