// Every input element will have a state that keeps track of its value.

// The value of the input will be set to the state.

// The input will have a onChange event and its event handler will update the state.

// That change will be reflected on the input because remember that the input value is set to the state value

// We call these inputs 'controlled inputs' because reacct is what controls them.


import { useState } from "react";

export default function Username(){

    const [username, setUsername] = useState('');

    const changeUsername = (evtObj) => {

        setUsername(evtObj.target.value);

    };

    return (

        <form action="">

            <label htmlFor="username">Username</label>
            
            <input 
            type="text"
            id="username"
            value={username}
            onChange={changeUsername}
            />

            <button>Submit</button>

        </form>
    );


};
