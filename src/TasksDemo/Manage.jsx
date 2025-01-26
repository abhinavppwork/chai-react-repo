import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import TaskCount from './TaskCount'
function Manage() {
  return (
    <div>
        <h1 className="display-1 text-primary">Task Managment System</h1>
        <div className='d-flex justify-content-around mt-5'>
        <AddTask />
        <TaskList />
        <TaskCount />
        </div>
    </div>
  )
}

export default Manage
