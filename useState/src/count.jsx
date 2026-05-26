import { useState } from 'react'
const Count = () => {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(true)
  const [visible, setVisible] = useState(true)
  const [reset, setReset] = useState(true)



  return (
    
    <>
     <h1>{count}</h1>

     <button onClick={count>0?()=>setCount(count-1):0} style={{ width: '100px' }}>decrement</button><br/>

     <button onClick={()=>setCount(count+1)} style={{  width: '100px' }}>increment</button><br/>

     {hide?<h1>mantasha</h1>:""}<br/>




     <button onClick={()=>setHide(!hide)} style={{  width: '100px' }}>reset</button><br/>

     <button onClick={()=>setVisible(!visible)} style={{  width: '100px' }}>{visible?"visible":"hidden"}</button><br/>

     <div style={{blacl:visible?"block":"none"}}>
        {reset?}

        <button onClick={()=>setCount(!reset)} style={{ width: '100px'}}>reset</button>
     </div>

     


      
    </>
  )
}

export default Count
