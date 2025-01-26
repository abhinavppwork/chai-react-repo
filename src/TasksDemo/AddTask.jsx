import React from 'react'

function AddTask(props) {
  return (
    <div>
      <b className='text-danger fs-4'>Add Task</b>
      <br />
      <button className="btn-dark"onClick={props.addTask}>+</button>
    </div>
  )
}

export default AddTask
