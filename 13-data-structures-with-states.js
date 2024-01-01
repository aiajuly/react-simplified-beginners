// The state intial value can be an object or an array, but updating the values of these mutable data types is a little bit different: when you update them you must:
//1- create a completely new data structure( by spresading the original one).
//2- update the value in the new data structure.
//3- pass the new data structure to the change state function.


import {useState} from 'react'

export default function Score(){

    const [scores, setScores] = useState({p1: 0, p2: 0});

    const increaseP1 = () => {
        setScores(oldObject => { return {...oldObject, p1: oldObject.p1 +1} })
    };

    const increaseP2 = () => {
        setScores(oldObject => { return {...oldObject, p2: oldObject.p2 +1} })
    };

    return (
        <>
        <p>Player one scores: {scores.p1}</p>
        <p>Player two scores: {scores.p2}</p>

        <button onClick={increaseP1}>Increase player one score</button>
        <button onClick={increaseP2}>Increase player one score</button>
        </>
    );
};

