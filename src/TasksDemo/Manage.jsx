import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import TaskCount from './TaskCount'
import { useState } from 'react' 
function Manage() {
    let [tasks, setTasks] = useState([])
    function addTask() {
        let randomno = Math.floor(Math.random() * 1000000000)
        setTasks([...tasks,randomno])
        console.log(tasks)
    }
  return (
    <div>
        <h1 className="display-1 text-primary">Task Managment System</h1>
        <div className='d-flex justify-content-around mt-5'>
        <AddTask addTask={addTask}/>
        <TaskList task ={tasks}/>
        <TaskCount task ={tasks}/>
        </div>
    </div>
  )
}

export default Manage
