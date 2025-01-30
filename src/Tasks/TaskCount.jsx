import React from 'react'

function TaskCount(props) { /// {tasks : []}
  return (
    <div>
      <p>Task Count</p>
      <p>{props.tasks.length}</p>
    </div>
  )
}

export default TaskCount
