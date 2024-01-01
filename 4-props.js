// We call HTML attributes props in JSX.

// Every component function will have a single parameter( conventionally named props): which will be an object that aggregates all the props you passed to the component when you rendered it.

export default function Greeting({name}) {
    return <h1>Hello {name}</h1>
  };

import Greeting from "./Greeting";
// Let's render Greeting component:
export default function App() {
    return (
      <div className="App">
        
        <Greeting name="Ali"/>
  
      </div>
    );
};
  