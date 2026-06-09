import React from 'react'
import { useEffect, useState } from 'react'

const Withoutdependency = () => {
    let [ct ,setct ] = useState(0)
      useEffect(()=>alert("WORKING ..."))
    return (
    
    <>
      <h1>{ct}</h1>
      <button onClick={()=>setct(ct+1)}> click</button>
      
    </>
    
      
  )
}

export default Withoutdependency
