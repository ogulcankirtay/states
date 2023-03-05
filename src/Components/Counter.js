import {useState} from 'react'

export default function Counter() {
    const [number,setNumber]=useState(0);
    const Increase=()=>{
        setNumber(number+1)
    }
    return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number-1)}>Decrease</button>
      <button onClick={Increase}>Increase</button>
    </div>
  )
}
