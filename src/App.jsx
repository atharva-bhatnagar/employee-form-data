
import  {Form}  from "./components/Form";
import {Data} from "./components/Data"
import "./App.css"
import { useState } from "react";

function App() {

  const [submit,setSubmit]=useState(false)
  const [data,setData]=useState([])
  const [name,setName]=useState('')
  const [designation,setDesignation]=useState('')
  const [rating,setRating]=useState('')
  
  function handleSubmit(e){
    e.preventDefault()


    if(name!==''&&rating!==''&&designation!==''){
    
      setSubmit(true)
      setData(d=>[...d,{name:name,designation:designation,rating:rating}])
      console.log(data)
      setName('')
      setDesignation('')
      setRating('')
    }else{
      setSubmit(true)
    }
  }
  
  return (
    <div className="App">
      
      {
        (submit)?<Data data={data} setSubmit={setSubmit}/>:<Form handleSubmit={handleSubmit}
      name={name}
      designation={designation}
      rating={rating}
      setName={setName}
      setDesignation={setDesignation}
      setRating={setRating}
      />
      }
      
    </div>
  );
}

export default App;
