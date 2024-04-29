import React, { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

//we first declare the functional component App
function App() {
  //I'm here declaring the state var count and the function setCount in the useState hook, which I initializate the "count" to 0
  const [count, setCount] = useState(0);

  //decalring the incrementCount function to increment the count state by 1 once it's called
  const incrementCount = () => {
    setCount(count + 1);
  };

  //now we are declaring the resetCount function to reset the count state to 0 when called
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Debugging React Application</h1>
      <p>Current Count: {count}</p>
      {/*the button that is responsible to increment the count when clicked*/}
      <button onClick={incrementCount}>Increment</button>
      {/*the button to rest the count to 0 when clicked*/}
      <button onClick={resetCount}>Reset</button>
      {/*rendring the ChildComponent and passing the count state as a prop*/}
      <ChildComponent count={count} />
    </div>
  );
}

export default App;



//Debugging is like being a detective for your code! It's about finding and fixing problems (or "bugs") in your program 
//in my case, I used the React Developer Tools extension in Chrome to help find and solve issues with how the React components were working together
//after installing the React Developer Tools extension in Chrome to help debug the React application
//I used the extension to inspect component hierarchy, props, and state
//I identified and resolved issues related to state management and component behavior
//after testing the app, everything's running perfectly