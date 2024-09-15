import React, { useState } from 'react'

function AddTask({putintheText}) {
    const[add,setAdd]=useState("")


    const addtotheList=()=>{
        putintheText(add)
        setAdd("")
   
    }
  return (
    <>
      <div className='input-container'>
      <input type="text" placeholder='Enter something'
      className='input  '
      value={add}
      onChange={(event)=>setAdd(event.target.value)}
      />
      <button className='add-btn' 
      onClick={()=>addtotheList()}
      >AddTask</button>
      </div>
    </>
  )
}

export default AddTask
