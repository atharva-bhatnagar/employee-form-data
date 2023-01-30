import { useState } from "react";

function App() {
  const [counter,setCounter]=useState(0)
  
  
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={()=>{setCounter(counter+1)}}>Increment</button><br/><br/>
      <button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
    </div>
  );
}

export default App;
