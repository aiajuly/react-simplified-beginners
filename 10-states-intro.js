// What is a state in React?
// State in React refers to the data that a component can hold and update over time.


// To use state you must use the useState hook.
// It takes one argument( representing the state initial value).
// and returns an array of two elements:
// 1- The first one represent the state value itself.
// 2- The second one is a function that changes the state value.
// You must call useState inside components only.
// Every time we use the change state function our component will re-render to display the new state value.

import {useState} from 'react'

export default function IncrementNum(){

    const [num, setNum] = useState(0);
    
    const incromentNumByOne = () => {
        setNum(num+1)
    }

    return (
        <button onClick={incromentNumByOne}>Incroment <span>{num}</span></button>
    );
}