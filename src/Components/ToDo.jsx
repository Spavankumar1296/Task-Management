import React ,{use, useState} from 'react'
import './ToDo.css'
const ToDo = () => {
  const [tasks,setTask]=useState([]);
  const [newTask,setNewTask]=useState("");
  const handleInputChanges=(event)=>{
      setNewTask(event.target.value)
  }
  const addTask=()=>{
      if(newTask.trim()!==""){
        setTask(t=>[...t,newTask]);
        setNewTask("");
      }
  }
  const DeleteTask=(index)=>{
    setTask(tasks.filter((_,i)=>i!==index));
  }
  const MoveTaskUp=(index)=>{
      if(index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTask(updatedTasks);
      }
  }
  const MoveTaskDown=(index)=>{
    if(index<tasks.length-1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
      setTask(updatedTasks);
    }
  }
  return (
    <div>
        <h1 className='Todo-Heading'>TO DO LIST</h1>
        <div>
            <div className='Input'>
                <input type='text' placeholder='Enter Task' className='Input-Todo' value={newTask} onChange={handleInputChanges}/>
                <button className='Btn-Todo' onClick={addTask}>Add</button>
            </div>
            <center>
                <ol>
                    {tasks.map((task, index) => (
                      <li className='list-items' key={index}>
                          <span className="text">{task}</span>
                          <button className='Btn-Delete' onClick={() => DeleteTask(index)}>Delete</button>
                          <button className='Btn-up' onClick={() => MoveTaskUp(index)}>⬆</button>
                          <button className='Btn-up' onClick={() => MoveTaskDown(index)}>⬇</button>
                      </li>
                    ))}
                </ol>
            </center>
        </div>
    </div>
  );
}

export default ToDo