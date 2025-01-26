import React from 'react'

function TaskList(props) {
  return (
    <div>
      
      <b className='text-danger fs-4'>Task List</b>
      {
        props.task.map((tasks,index)=>(
           <p className= 'text-warning' key={index}>{tasks}</p>
        ))
      }

    </div>
  )
}

export default TaskList
