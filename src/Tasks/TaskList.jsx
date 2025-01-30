import React from 'react'

function TaskList(props) {  //{ tasks: [] }
  return (
    <div>
      <p>Task List</p>
      {
        props.tasks.map((task,index)=><p className='text-warning' key={index}>{task}</p>)
      }
    </div>
  )
}

export default TaskList
