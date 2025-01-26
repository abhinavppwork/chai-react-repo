import React from 'react'

function TaskCount(props) {
  return (
    <div>
      <b className='text-danger fs-4'>Task Count</b>
      <br />
        <p className='text-warning'>{props.task.length}</p>
        
    </div>
  )
}

export default TaskCount
