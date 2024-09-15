import React from 'react'

function ListsTsks({props,index,removeList}) {
  return (
    <>
      <div className='list-tasks'>
        {props.title}
        <button onClick={()=>removeList(index)} className='delete-btn'>Delete</button>
      </div>
    </>
  )
}

export default ListsTsks
