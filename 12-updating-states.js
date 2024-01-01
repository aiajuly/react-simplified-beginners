// When the change state function depends on the current state value we use a callback function, that callback will have access to the current state value.

import {useState} from 'react'

export default function IncrementNum(){

    const [num, setNum] = useState(0);
    
    const incromentNumByOne = () => {
        setNum(currentNum => currentNum+1)
    };

    return (
        <button onClick={incromentNumByOne}>Incroment <span>{num}</span></button>
    );
};