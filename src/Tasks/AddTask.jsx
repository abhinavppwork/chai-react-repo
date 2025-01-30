import { useState } from "react"
import {useForm} from "react-hook-form"

function AddTask(props) {
    const {register,handleSubmit,formState:{errors},reset} = useForm()
    function addNewTask(taskObj){
        props.setTasks([...props.tasks,taskObj.newTask])
        reset()   
    }
    console.log(props.tasks)
  return (
    <div>
      <p>Add Task</p>
      <form action="" className='mt-5' onSubmit={handleSubmit(addNewTask)}>
      <input type="text" {...register("newTask")}className='form-control mb-4' placeholder='Add your task' />
      <button className="btn btn-warning" type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTask
