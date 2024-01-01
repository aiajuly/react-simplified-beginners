// A component filename must be capital and camelCase.
// The function name must be the same as the filename.

export default function Greeting() {
  return <h1>Hello</h1>
};

import Greeting from "./Greeting";
// Let's render Greeting component:
export default function App() {
    return (
      <div className="App">
        
        <Greeting/>

      </div>
    );
  };