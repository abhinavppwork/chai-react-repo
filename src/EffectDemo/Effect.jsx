import React from 'react'
import { useEffect,useState } from 'react'

function Effect() {
  let [counter,setCounter] = useState(0);
  let [counter2,setCounter2] = useState(0);
  useEffect(()=>{
    console.log("MAMA EWW")
  },[counter])
  function handleincreament(){
    setCounter(counter+1)
  }
  function handleincreament2(){
    setCounter2(counter2+1)
  }
  return (
    <div className='container text-center'>
      <h1 className='text-warning display-1'>Hello guys</h1>
      <h1>counter : {counter}</h1>
      <h1>counter : {counter2}</h1>
      <button className="btn btn-primary" onClick={handleincreament}>+</button>
      <button className="btn btn-warning" onClick={handleincreament2}>+</button>
    </div>
  )
}

export default Effect
