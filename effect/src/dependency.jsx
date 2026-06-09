import React from 'react'
import { useEffect, useState } from 'react'

const Dependency = () => {
    let [ct ,setct ] = useState(0)
    let [color ,setcolor ] = useState()
    useEffect(()=>alert("WORKING ..."),[ct])
    return (
    
    <>
      <h1 style={{backgroundColour:color}}>{ct}</h1>
      <button onClick={()=>setct(ct+1)}> click</button>

      <button onClick={()=>setcolor('red')}>red</button>
      
      <button onClick={()=>setcolor("green")}>green</button>
      <button onClick={()=>setcolor("blue")}>blue</button>
      <button onClick={()=>setcolor("pink")}>pink</button>
      
    </>
    
      
  )
}

export default Dependency