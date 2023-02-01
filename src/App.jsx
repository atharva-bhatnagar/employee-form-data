
import { useState } from "react";
import "./App.css"

function App() {
  const [name,setName]=useState("")

  const handleName=(e)=>{
    console.log("Name==>",name)
    setName(e.target.value)
  }
  
  
  return (
    <div className="App">
      <form>
        <h1>Login</h1>
        <label>
          Name:
          <input type="text" onChange={handleName}/>
        </label>
      
        <label>
          Email:
          <input type="email"/>
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
