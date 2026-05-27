import { useState } from 'react'
const Change = () => {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(true)
  const [visible, setVisible] = useState(true)
  const [light, setLight] = useState(true)



  return (
    
    <>
     <h1>{count}</h1>

     <button onClick={count>0?()=>setCount(count-1):0} style={{ width: '100px' }}>decrement</button><br/>

     <button onClick={()=>setCount(count+1)} style={{  width: '100px' }}>increment</button><br/>

     {hide?<h1>mantasha</h1>:""}<br/>




     <button onClick={()=>setHide(!hide)} style={{  width: '100px' }}>reset</button><br/>

   


     {light?<div style={{ width: '300px', height: '300px', backgroundColor: 'white', color: 'black' }}>Hello world</div>:<div style={{ width: '300px', height: '300px', backgroundColor: 'black', color: 'white' }}>Hello world</div>}

     <button onClick={()=>setLight(!light)} style={{  width: '100px' }}>{light?"light":"dark"}</button><br/>

     


      
    </>
  )
}

export default Change
