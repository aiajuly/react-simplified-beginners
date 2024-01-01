// Every element can have an onSomeEvent prop which accepts an event handler that runs when we trigger that event:

const clickHandler = function(){
    console.log("Clicked me...")
};

export default function ClickMe(){

    return (
        <>
        <h3>Click the button:</h3>
        <button onClick={clickHandler}>Click Me...</button>
        </>
    );
};

// Another example:
const hoverHandler = function(){
    console.log("You hovered over me...")
};

export default function HoverOverMe(){

    return (
        <>
        <h3 onMouseOver={hoverHandler} >Hover Over Me...</h3>
        </>
    );
};

// Your event handler will be given an object that represents the eventObject
const keyHandler = function(eventObject){
    console.log(eventObject.key)
}

export default function PressAKey(){

    return (
        <input type="text" onKeyDown={keyHandler} />
    );
}