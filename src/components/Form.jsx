import React from 'react'

export const Form = ({handleSubmit,name,designation,rating,setName,setDesignation,setRating}) => {
  return (
    <div className='form-container'>
        <h1>Employee Form</h1>
        <form onSubmit={handleSubmit}>
            <label className='container'>
                Name: 
                <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </label><br/>
            <label className='container'>
                Designation: 
                <input type="text" name="designation" value={designation} onChange={(e)=>{setDesignation(e.target.value)}}/>
            </label><br />
            <label className='container'>
                Rating: 
                <input type="text" name="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
            </label><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
