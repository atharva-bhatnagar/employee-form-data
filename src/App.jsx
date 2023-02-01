
import { useState } from "react";
import "./App.css"

function App() {
  const [Name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const handleName=(e)=>{
    console.log("Name==>",Name)
    setName(e.target.value)
  }
  const handleEmail=(e)=>{
    console.log("Email==>",email)
    setEmail(e.target.value)
  }
  const handlePass=(e)=>{
    console.log("Password==>",pass)
    setPass(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(Name!==""&&email!==""&&pass!==""){
      alert("submitted Successfuly!!!")
    }else{
      alert("Please check your inputs")
    }
  }
  
  
  return (
    <div className="App" onSubmit={handleSubmit}>
      <form>
        <h1>Login</h1>
        <label>
          Name:
          <input type="text" onChange={handleName} name="name" value={Name}/>
        </label>
      
        <label>
          Email:
          <input type="email" onChange={handleEmail} name="email" value={email}/>
        </label>
        <label>
          Password:
          <input type="password" onChange={handlePass} name="password" value={pass}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
