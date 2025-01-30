import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom';

function Register() {
  const {register,handleSubmit,formState:{errors}} = useForm();
  function handleFormSubmit(newUser){
    console.log(newUser)
    console.log(errors)
    //make http post requests to save new user in api
    fetch("http://localhost:3000/users",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newUser)
    }).then((res)=>{
      if(res.status ===201){
          //navigate to top login component automatically
          navigate("/login");
      }
    })
    .catch(err =>console.log("error:" ,err));

}
  return (
    <div style={{width:'100vh'}}>
      <h1 className='display-3 text-info'>Register</h1>
      <form className="w-50 mx-auto mt-5 " onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Username */}
        <div className="mb-3">
        <label htmlFor="Username" className='form-label'>Username</label>
        <input type="text" id = 'Username' {...register('Username',{required: true,minLength:4})} className='form-control'/>
        {
            errors.Username?.type==='required' && <p className="text-danger">*Username is required</p>   
        }
        {
            errors.Username?.type==='minLength' && <p className="text-danger">*Min length 4 ra badacow</p>
        }
        </div>
        {/* Email */}
        <div className="mb-3">
        <label htmlFor="email" className='form-label'>Email</label>
        <input type="email" id = 'email' {...register('email')} className='form-control'/>
        </div>
        {/* Skills */}
        <div className="mb-3">
            <label className="form-label"><b>Select Your Skill</b></label>
            <div className="form-check">
                <input type="checkbox" {...register('css')} id="css" className="form-check-input" />
                <label htmlFor="css" className="form-check-label">CSS</label>
            </div>
            <div className="form-check">
                <input type="checkbox" {...register('javascript')} id="javascript" className="form-check-input" />
                <label htmlFor="javascript" className="form-check-label">JS</label>
            </div>
            <div className="form-check">
                <input type="checkbox" {...register('react')} id="react" className="form-check-input" />
                <label htmlFor="react" className="form-check-label">React</label>
            </div>
        </div>
        {/* Select Label */}
        <div className="mb-3">
            <label htmlFor="state" className="form-label">Select State</label>
            <select {...register('state')} id="state" className="form-select">
                <option value="telangana">Telangana</option>
                <option value="AndhraPradhesh">Andhra Pradhesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
        </div>
        {/* Feedback */}
        <div className="mb-3">
            <label htmlFor="feedback" className="form-label">FeedBack</label>
            <textarea {...register('feedback')} id="feedback" className="form-control"></textarea>
        </div>
        {/* SUbmit button */}
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}

export default Register
