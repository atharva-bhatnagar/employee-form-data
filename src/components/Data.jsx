import React from 'react'

export const Data = ({data,setSubmit}) => {
  return (
    <div className='data-container'>
        <h1>Employee Data</h1>
        {
            data.map((employee=>{
                return(
                    <div className='employee-card'>
                        Name : {employee.name} | 
                        Designation : {employee.designation} | 
                        Rating : {employee.rating}
                    </div>)
                
            }))
        }
        <button onClick={()=>{setSubmit(false);}}>Go Back</button>
    </div>
  )
}
