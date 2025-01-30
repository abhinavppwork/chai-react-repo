import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import TaskCount from './TaskCount'
import { useState } from 'react'
function ManageTasks2() {
  const [tasks,setTasks] = useState([])
  return (
    <div>
      <h1 className='display-3'>Manage Tasks System</h1>
      <div className="d-flex justify-content-around mt-5">
      <AddTask tasks = {tasks} setTasks= {setTasks}/>
      <TaskList tasks= {tasks}/>
      <TaskCount tasks = {tasks}/>
      </div>
    </div>
  )
}

export default ManageTasks2
