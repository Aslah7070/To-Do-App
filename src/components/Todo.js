import React,{useState} from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListsTsks from './ListsTsks'


function Todo() {
    // let initialValue=[
    //     {title:"learn HTML"},
    //     {title:"learn CSS"},
    //     {title:"learn JS"}
    // ]

const [tasks,setTasks]=useState([])
const  putintheText=(title)=>{
   let  newvalue=[...tasks,{title}]
    setTasks(newvalue)
}

const removeList=(index)=>{
    let removingTask=[...tasks]
    removingTask.splice(index,1)
    setTasks(removingTask)
}

console.log(tasks);

  return (
    <>
      <div className='todo-container'>
        <div className='header'>To-Do App</div>
        <div className='add-task'>
        <AddTask putintheText={putintheText}/>
        </div>
        <div className='task'>
            {tasks.map((title,index)=>(
                <ListsTsks key={index} props={title} removeList={removeList} index={index}/>
            ))}
        
        </div>
      </div>
    </>
  )
}

export default Todo
